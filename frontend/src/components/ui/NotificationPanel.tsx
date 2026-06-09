import { AnimatePresence, motion } from "framer-motion";

import { useDom } from "../../contexts/domContext";

const notifications = [
  {
    id: 1,
    title: "Test Published",
    message: "Interview Preparation is now live",
  },
  {
    id: 2,
    title: "Draft Saved",
    message: "System Design Mock Test saved successfully",
  },
  {
    id: 3,
    title: "Schedule Reminder",
    message: "Scheduled Test 5 will go live soon",
  },
];

export default function NotificationPanel() {
  const { isNotificationsOpen, toggleNotifications } = useDom();

  return (
    <AnimatePresence>
      {isNotificationsOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleNotifications}
            className="fixed inset-0 z-[90] bg-black/30 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25 }}
            className="fixed right-0 top-0 z-[100] flex h-screen w-[420px] flex-col border-l bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b p-6">
              <h2 className="text-xl font-semibold">Notifications</h2>

              <button onClick={toggleNotifications} className="text-2xl">
                ×
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-6">
              {notifications.map((item) => (
                <div key={item.id} className="rounded-2xl border p-4">
                  <h3 className="font-semibold">{item.title}</h3>

                  <p className="mt-2 text-sm text-zinc-600">{item.message}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
