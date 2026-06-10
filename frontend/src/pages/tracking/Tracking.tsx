import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Check, Circle } from "lucide-react";

import Empty from "../../components/ui/Empty";
import StatusBadge from "../../components/shared/StatusBadge";

import testService from "../../services/test.service";

import type { Test } from "../../types/test.types";

export default function Tracking() {
  const { id } = useParams();

  const [loading, setLoading] =
    useState(true);

  const [test, setTest] =
    useState<Test | null>(null);

  useEffect(() => {
    const loadTest = async () => {
      try {
        const response =
          await testService.getById(
            id!
          );

        setTest(
          response.data.data
        );
      } finally {
        setLoading(false);
      }
    };

    loadTest();
  }, [id]);

  if (loading) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }

  if (!test) {
    return (
      <div className="p-8">
        <Empty
          title="No Test Found"
          subtitle="Unable to load test."
        />
      </div>
    );
  }

  const status =
    test.status || "draft";

  const steps = [
    {
      title: "Draft",
      completed:
        status === "draft" ||
        status === "scheduled" ||
        status === "live" ||
        status === "expired",
      current:
        status === "draft",
    },

    {
      title: "Scheduled",
      completed:
        status === "scheduled" ||
        status === "live" ||
        status === "expired",
      current:
        status === "scheduled",
    },

    {
      title: "Live",
      completed:
        status === "live" ||
        status === "expired",
      current:
        status === "live",
    },

    {
      title: "Expired",
      completed:
        status === "expired",
      current:
        status === "expired",
    },
  ];

  const formatDate = (
    value?: string
  ) => {
    if (!value) {
      return "--";
    }

    return new Date(
      value
    ).toLocaleString();
  };

  return (
    <div className="space-y-8 p-8">
      <div className="rounded-2xl border bg-white p-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-semibold">
              {test.name}
            </h1>

            <p className="mt-2 text-zinc-500">
              Current Test Lifecycle
            </p>
          </div>

          <StatusBadge
            status={status as any}
          />
        </div>
      </div>

      <div className="rounded-2xl border bg-white p-8">
        <ol className="flex">
          {steps.map(
            (step, index) => (
              <li
                key={step.title}
                className="relative flex-1"
              >
                {index <
                  steps.length - 1 && (
                  <div
                    className={`absolute left-1/2 top-4 h-1 w-full ${
                      step.completed
                        ? "bg-[#6475F7]"
                        : "bg-zinc-200"
                    }`}
                  />
                )}

                <div className="relative flex flex-col items-center">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      step.completed
                        ? "bg-[#6475F7] text-white"
                        : step.current
                          ? "bg-[#6475F7] text-white ring-4 ring-[#6475F7]/20"
                          : "border border-zinc-300 bg-white"
                    }`}
                  >
                    {step.completed ? (
                      <Check size={18} />
                    ) : (
                      <Circle size={12} />
                    )}
                  </span>

                  <div className="mt-4 text-center">
                    <h3 className="font-medium">
                      {step.title}
                    </h3>
                  </div>
                </div>
              </li>
            )
          )}
        </ol>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl border bg-white p-5">
          <p className="text-sm text-zinc-500">
            Scheduled At
          </p>

          <p className="mt-2 font-medium">
            {formatDate(
              (test as any)
                ?.scheduledAt
            )}
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <p className="text-sm text-zinc-500">
            Published At
          </p>

          <p className="mt-2 font-medium">
            {formatDate(
              (test as any)
                ?.publishedAt
            )}
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <p className="text-sm text-zinc-500">
            Expires At
          </p>

          <p className="mt-2 font-medium">
            {formatDate(
              (test as any)
                ?.expiresAt
            )}
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <p className="text-sm text-zinc-500">
            Current Status
          </p>

          <p className="mt-2 font-medium capitalize">
            {status}
          </p>
        </div>
      </div>
    </div>
  );
}