

/**
 * Test publishing page.
 *
 * Purpose:
 * Manages publication mode, scheduling and availability
 * configuration before making a test live.
 */


import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Breadcrumb from "../../components/shared/BreadCrumb";
import Loader from "../../components/ui/Loader";
import TestSummaryCard from "../../components/shared/TestSummaryCard";

import PublishProgress from "./parts/PublishProgress";
import PublishModeTabs from "./parts/PublishModeTabs";
import PublishSchedule from "./parts/PublishSchedule";
import PublishAvailability from "./parts/PublishAvailability";
import PublishActions from "./parts/PublishActions";

import { useWorkflowTest } from "../../hooks/useWorkflowTest";
import { useDom } from "../../contexts/domContext";

import testService from "../../services/test.service";

export default function Publish() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { addToast } = useDom();

  const { test, questions } = useWorkflowTest(id);

  const [loading, setLoading] = useState(false);

  const [publishMode, setPublishMode] = useState<"immediate" | "scheduled">(
    "immediate"
  );

  const [scheduledDate, setScheduledDate] = useState("");

  const [scheduledTime, setScheduledTime] = useState("");

  const [availability, setAvailability] = useState<
    "always" | "1week" | "2weeks" | "3weeks" | "1month" | "custom"
  >("always");

  const [availableUntilDate, setAvailableUntilDate] = useState("");

  const [availableUntilTime, setAvailableUntilTime] = useState("");

  useEffect(() => {
    if (!test) {
      return;
    }

    if (test.publishMode) {
      setPublishMode(test.publishMode);
    }

    if (test.scheduledAt) {
      const date = new Date(test.scheduledAt);

      setScheduledDate(date.toISOString().split("T")[0]);

      setScheduledTime(date.toTimeString().slice(0, 5));
    }
  }, [test]);

  const buildAvailableUntil = () => {
    if (availability === "always") {
      return null;
    }

    const now = new Date();

    if (availability === "1week") {
      now.setDate(now.getDate() + 7);

      return now.toISOString();
    }

    if (availability === "2weeks") {
      now.setDate(now.getDate() + 14);

      return now.toISOString();
    }

    if (availability === "3weeks") {
      now.setDate(now.getDate() + 21);

      return now.toISOString();
    }

    if (availability === "1month") {
      now.setMonth(now.getMonth() + 1);

      return now.toISOString();
    }

    if (availability === "custom" && availableUntilDate && availableUntilTime) {
      return new Date(
        `${availableUntilDate}T${availableUntilTime}`
      ).toISOString();
    }

    return null;
  };

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!test || !id) {
      return;
    }

    try {
      setLoading(true);

      let scheduledAt: string | null = null;

      if (publishMode === "scheduled") {
        if (!scheduledDate || !scheduledTime) {
          addToast("Select publish date and time", "error");

          return;
        }

        scheduledAt = new Date(
          `${scheduledDate}T${scheduledTime}`
        ).toISOString();
      }

      await testService.update(id, {
        publishMode,

        status: publishMode === "immediate" ? "live" : "scheduled",

        scheduledAt,

        availableUntil: buildAvailableUntil(),

        publishedAt:
          publishMode === "immediate" ? new Date().toISOString() : null,
      });

      addToast(
        publishMode === "immediate"
          ? "Test published successfully"
          : "Test scheduled successfully"
      );

      navigate(`/tests/${id}/tracking`);
    } catch {
      addToast("Unable to publish test", "error");
    } finally {
      setLoading(false);
    }
  };

  if (!test) {
    return <Loader />;
  }

  return (
    <div className="space-y-8 p-8">
      <Breadcrumb items={["Test Creation", "Publish Test"]} />

      <PublishProgress
        completed={questions.length}
        total={test.totalQuestions}
      />

      <form onSubmit={handlePublish} className="space-y-8">
        <TestSummaryCard test={test} />

        <PublishModeTabs value={publishMode} onChange={setPublishMode} />

        {publishMode === "scheduled" && (
          <PublishSchedule
            date={scheduledDate}
            time={scheduledTime}
            onDateChange={setScheduledDate}
            onTimeChange={setScheduledTime}
          />
        )}

        <PublishAvailability
          value={availability}
          endDate={availableUntilDate}
          endTime={availableUntilTime}
          onChange={setAvailability}
          onEndDateChange={setAvailableUntilDate}
          onEndTimeChange={setAvailableUntilTime}
        />

        <PublishActions
          loading={loading}
          onCancel={() => navigate(`/tests/${id}/questions`)}
        />
      </form>
    </div>
  );
}
