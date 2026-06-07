import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";


import { Provider } from "react-redux";
import "./index.css";
import { store } from "./state/store.ts";
import { ThemeProvider } from "./contexts/themeContext";
import { DomProvider } from "./contexts/domContext";

import Layout from "./pages/layout/Layout";
import AuthLayout from "./pages/AuthLayout";

import Auth from "./pages/auth/Auth";
import Documentation from "./pages/doc/Doc";
import Dashboard from "./pages/dashboard/Dashboard";
import Test from "./pages/test/Test";
import Question from "./pages/question/Question";
import Publish from "./pages/publish/Publish";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<AuthLayout authenticationRequired={false} />}>
        <Route index element={<Auth />} />
      </Route>

      <Route path="doc" element={<Documentation />} />

      <Route element={<AuthLayout authenticationRequired />}>
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="tracking" element={<Tracking />} />

        <Route path="tests/create" element={<Test />} />

        <Route path="tests/:id/questions" element={<Question />} />

        <Route path="tests/:id/publish" element={<Publish />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider>
      <DomProvider>
        <RouterProvider router={router} />
      </DomProvider>
    </ThemeProvider>
  </Provider>
);
