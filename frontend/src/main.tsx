import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//contexts and state
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./state/store";
import { ThemeProvider } from "./contexts/themeContext";
import { DomProvider } from "./contexts/domContext";
import { TestProvider } from "./contexts/testContext";

//layout and error
import ErrorBoundary from "./components/shared/ErrorBoundary";
import NotFound from "./pages/not-found/NotFound";
import Layout from "./pages/layout/Layout";
import AuthLayout from "./pages/AuthLayout";

//pages
import Auth from "./pages/auth/Auth";
import Dashboard from "./pages/dashboard/Dashboard";
import Tracking from "./pages/Tracking/Tracking";
import Test from "./pages/test/Test";
import Question from "./pages/question/Question";
import Publish from "./pages/publish/Publish";

//Assignment Docn
import Doc from "./pages/doc/Doc";

//react router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<AuthLayout authenticationRequired={false} />}>
        <Route index element={<Auth />} /> //cant access if logged in
      </Route>

      <Route element={<AuthLayout authenticationRequired />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="tracking" element={<Tracking />} />
        <Route path="tests/create" element={<Test />} />
        <Route path="tests/:id/questions" element={<Question />} />
        <Route path="tests/:id/publish" element={<Publish />} />
      </Route>

     
      <Route path="*" element={<NotFound />} />
      <Route path="doc" element={<Doc />} /> {/* Assignment Docn */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ErrorBoundary> //for err
    <Provider store={store}> //state
      <ThemeProvider> 
        <DomProvider> //for toast messages
          <TestProvider> //context for current test
            <RouterProvider router={router} />
          </TestProvider>
        </DomProvider>
      </ThemeProvider>
    </Provider>
  </ErrorBoundary>
);
