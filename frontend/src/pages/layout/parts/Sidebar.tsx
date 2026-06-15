

/**
 * Main application sidebar.
 *
 * Props:
 * - mobileOpen
 * - onClose
 *
 * Purpose:
 * Provides primary workflow navigation and workflow protection handling.
 */


import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  ScanSearch,
  TrendingUp,
  FilePenLine,
  Send,
  CircleHelp,
} from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../../state/store";
import { forgetTest, rememberTest } from "../../../state/slices/rememberSlice";

import InnerSidebar from "./InnerSidebar";
import { useTest } from "../../../contexts/testContext";
import { useDom } from "../../../contexts/domContext";
import ConfirmModal from "../../../components/shared/ConfirmModal";

interface Props {
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ mobileOpen, onClose }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const { id } = useParams();
  const { test, questions, resetTest } = useTest();
  const { setModal } = useDom();
  const [hovered, setHovered] = useState(false);
  const auth = useSelector((state: any) => state.auth);

  const inWorkflow =
    location.pathname.includes("/edit") ||
    location.pathname.includes("/questions") ||
    location.pathname.includes("/publish") ||
    location.pathname.includes("/tracking");

  const navItems = [
    {
      label: "Dashboard",
      icon: TrendingUp,
      path: "/dashboard",
      exact: false,
    },

    ...(inWorkflow && id
      ? [
          {
            label: "Edit Test",
            icon: FilePenLine,
            path: `/tests/${id}/edit`,
            exact: true,
          },

          {
            label: "Questions",
            icon: CircleHelp,
            path: `/tests/${id}/questions`,
            exact: true,
          },

          {
            label: "Publish",
            icon: Send,
            path: `/tests/${id}/publish`,
            exact: true,
          },

          {
            label: "Test Tracking",
            icon: ScanSearch,
            path: `/tests/${id}/tracking`,
            exact: true,
          },
        ]
      : [
          {
            label: "Test Creation",
            icon: FilePenLine,
            path: "/tests/create",
            exact: true,
          },
        ]),
  ];

  const hasInnerSidebar =
    location.pathname.includes("/dashboard") ||
    location.pathname.includes("/questions") ||
    location.pathname.includes("/publish");

  const mainWidth = hasInnerSidebar ? (hovered ? "w-70" : "w-12") : "w-70";
  const showLabels = !hasInnerSidebar || hovered;
  const workflowActive =
    location.pathname.includes("/edit") ||
    location.pathname.includes("/questions") ||
    location.pathname.includes("/publish") || 
    location.pathname.includes("/tracking");

  const handleNavigation = (path: string) => {
    if (
      path.includes("/tracking") ||
      path.includes("/edit") ||
      path.includes("/questions") ||
      path.includes("/publish")
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
          if (test && id) {
            dispatch(
              rememberTest({
                userId: auth.user._id,
                testId: test._id,
                lastPage: location.pathname.includes("/publish")
                  ? "publish"
                  : "questions",

                test,
                questions,
                updatedAt: new Date().toISOString(),
              })
            );
          }

          resetTest();
          setModal(null);
          navigate(path);
        }}
        onDiscard={() => {
          if (test) {
            dispatch(
              forgetTest({
                userId: auth.user._id,
                testId: test._id,
              })
            );
          }

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
    <>
      {mobileOpen && (
        <div
          onClick={onClose}
          className="
        fixed inset-0
        z-40
        bg-black/40

        sm:hidden
      "
        />
      )}

      <aside
        className={`
      fixed top-0 left-0
      z-50 sm:z-40

      flex h-screen
      max-w-70 min-w-70
      flex-col overflow-hidden

      border-r border-zinc-300
      bg-white

      transition-transform
      duration-300

      ${mobileOpen ? "translate-y-0" : "-translate-y-full"}

      sm:translate-y-0
    `}
      >
        <div className="border-b border-zinc-300 p-6">
          <img
            src="/company-logo.png"
            alt="PrepRoute"
            className="h-16 w-auto"
          />
        </div>

        <div className="flex h-full overflow-hidden">
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`${mainWidth} flex flex-col overflow-hidden px-1 transition-all duration-300`}
          >
            <nav className="flex flex-1 flex-col gap-1 py-3">
              {navItems.map((item) => {
                const Icon = item.icon;

                const isActive = item.path.includes("/tracking")
                  ? location.pathname.includes("/tracking")
                  : item.exact
                    ? location.pathname === item.path
                    : location.pathname.startsWith(item.path);

                return (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => handleNavigation(item.path)}
                    className="w-full text-left"
                  >
                    <div
                      className={`relative flex items-center gap-3 rounded-xl py-4 pl-4 transition-all duration-300 ${
                        isActive && showLabels
                          ? "active-link bg-[#6475F7]/8 text-[#6475F7]"
                          : "text-zinc-500 hover:bg-zinc-100"
                      }`}
                    >
                      <Icon
                        size={showLabels ? 20 : 18}
                        strokeWidth={1.8}
                        className="flex-shrink-0"
                      />

                      {showLabels && (
                        <span className="truncate text-[15px] font-medium">
                          {item.label}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>

          {hasInnerSidebar && <InnerSidebar collapsed={hovered} />}
        </div>
      </aside>
    </>
  );
}
