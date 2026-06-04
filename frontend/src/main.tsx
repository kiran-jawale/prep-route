
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";

// Redux store for global state management
import { store } from "./redux/redux";

// Context providers for theme and DOM utilities
import { ThemeProvider } from "./contexts/themeContext";
import { DomProvider } from "./contexts/domContext";

// Layout components
import Layout from "./pages/layout/Layout";
import AuthLayout from "./pages/AuthLayout";

// Page components
import Auth from "./pages/auth/Auth";
import Dashboard from "./pages/dashboard/Dashboard";
import Test from "./pages/test/Test";
import Question from "./pages/question/Question";
import Publish from "./pages/publish/Publish";

// ============================================================================
// Application Entry Point - Type-safe routing configuration
// ============================================================================

// Configure routing structure with proper TypeScript typing
// Routes are organized by authentication requirement via AuthLayout wrapper
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* Public routes - no authentication required */}
      <Route element={<AuthLayout authenticationRequired={false} />}>
        <Route path="" element={<Auth />} /> {/* Login/Register page */}
      </Route>

      {/* Protected routes - authentication required to access */}
      <Route element={<AuthLayout authenticationRequired={true} />}>
        <Route path="dashboard" element={<Dashboard />} /> {/* Main dashboard */}
        <Route path="tests/create" element={<Test />} /> {/* Create new test */}
        <Route path="tests/:id/questions" element={<Question />} /> {/* Manage questions */}
        <Route path="tests/:id/publish" element={<Publish />} /> {/* Publish test */}
      </Route>
    </Route>
  )
);

// Mount React app to DOM
// Wrapped with providers in order: Redux store -> Theme context -> DOM utilities -> Router
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <DomProvider>
        <RouterProvider router={router} />
      </DomProvider>
    </ThemeProvider>
  </Provider>
);
