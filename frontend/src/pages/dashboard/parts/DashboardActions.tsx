

/**
 * Dashboard action panel.
 *
 * Purpose:
 * Provides quick access to primary dashboard actions.
 */


import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";

export default function DashboardActions() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end">
      <Button
        onClick={() => navigate("/tests/create")}
      >
        Create Test
      </Button>
    </div>
  );
}