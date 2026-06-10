import { useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  ScanSearch,
  TrendingUp,
  FilePenLine,
} from "lucide-react";

import { useDispatch } from "react-redux";

import type { AppDispatch } from "../../../state/store";

import {
  rememberTest,
} from "../../../state/slices/rememberSlice";

import InnerSidebar from "./InnerSidebar";

import { useTest } from "../../../contexts/testContext";
import { useDom } from "../../../contexts/domContext";

import ConfirmModal from "../../../components/shared/ConfirmModal";

export default function Sidebar() {
  const navigate = useNavigate();

  const dispatch =
    useDispatch<AppDispatch>();

  const location =
    useLocation();

  const { id } =
    useParams();

  const {
    test,
    resetTest,
  } = useTest();

  const { setModal } =
    useDom();

  const [hovered, setHovered] =
    useState(false);

  const inWorkflow =
    location.pathname.includes(
      "/questions"
    ) ||
    location.pathname.includes(
      "/publish"
    ) ||
    location.pathname.includes(
      "/tracking"
    );

  const navItems = [
    {
      label: "Dashboard",
      icon: TrendingUp,
      path: "/dashboard",
      exact: false,
    },

    {
      label: "Test Creation",
      icon: FilePenLine,
      path: "/tests/create",
      exact: true,
    },

    ...(inWorkflow && id
      ? [
          {
            label: "Test Tracking",
            icon: ScanSearch,
            path: `/tests/${id}/tracking`,
            exact: true,
          },
        ]
      : []),
  ];

  const hasInnerSidebar =
    location.pathname.includes(
      "/dashboard"
    ) ||
    location.pathname.includes(
      "/questions"
    ) ||
    location.pathname.includes(
      "/publish"
    ) ||
    location.pathname.includes(
      "/tracking"
    );

  const mainWidth =
    hasInnerSidebar
      ? hovered
        ? "w-70"
        : "w-12"
      : "w-70";

  const showLabels =
    !hasInnerSidebar ||
    hovered;

  const workflowActive =
    location.pathname.includes(
      "/questions"
    ) ||
    location.pathname.includes(
      "/publish"
    );

  const handleNavigation = (
    path: string
  ) => {
    if (
      path.includes(
        "/tracking"
      )
    ) {
      navigate(path);

      return;
    }

    if (!workflowActive) {
      navigate(path);

      return;
    }

    setModal(
      <ConfirmModal
        title="Save Progress?"
        message="You have an unfinished test workflow."
        onSave={() => {
          if (
            test &&
            id
          ) {
            dispatch(
              rememberTest({
                testId: id,

                lastPage:
                  location.pathname.includes(
                    "/publish"
                  )
                    ? "publish"
                    : "questions",
              })
            );
          }

          resetTest();

          setModal(null);

          navigate(path);
        }}
        onDiscard={() => {
          resetTest();

          setModal(null);

          navigate(path);
        }}
        onCancel={() => {
          setModal(null);
        }}
      />
    );
  };

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen max-w-70 min-w-70 flex-col overflow-hidden border-r border-zinc-300 bg-white">
      <div className="border-b border-zinc-300 p-6">
        <img
          src="/company-logo.png"
          alt="PrepRoute"
          className="h-16 w-auto"
        />
      </div>

      <div className="flex h-full overflow-hidden">
        <div
          onMouseEnter={() =>
            setHovered(true)
          }
          onMouseLeave={() =>
            setHovered(false)
          }
          className={`${mainWidth} flex flex-col overflow-hidden px-1 transition-all duration-300`}
        >
          <nav className="flex flex-1 flex-col gap-1 py-3">
            {navItems.map(
              (item) => {
                const Icon =
                  item.icon;

                const isActive =
                  item.path.includes(
                    "/tracking"
                  )
                    ? location.pathname.includes(
                        "/tracking"
                      )
                    : item.exact
                      ? location.pathname ===
                        item.path
                      : location.pathname.startsWith(
                          item.path
                        );

                return (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() =>
                      handleNavigation(
                        item.path
                      )
                    }
                    className="w-full text-left"
                  >
                    <div
                      className={`relative flex items-center gap-3 rounded-xl py-4 pl-4 transition-all duration-300 ${
                        isActive &&
                        showLabels
                          ? "active-link bg-[#6475F7]/8 text-[#6475F7]"
                          : "text-zinc-500 hover:bg-zinc-100"
                      }`}
                    >
                      <Icon
                        size={
                          showLabels
                            ? 20
                            : 18
                        }
                        strokeWidth={
                          1.8
                        }
                        className="flex-shrink-0"
                      />

                      {showLabels && (
                        <span className="truncate text-[15px] font-medium">
                          {
                            item.label
                          }
                        </span>
                      )}
                    </div>
                  </button>
                );
              }
            )}
          </nav>
        </div>

        {hasInnerSidebar && (
          <InnerSidebar
            collapsed={
              hovered
            }
          />
        )}
      </div>
    </aside>
  );
}