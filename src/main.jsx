import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import PrimaryLayout from "./layouts/primary";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MoreDetailForm from "./pages/more-details-form";
import SignUp from "./pages/signup";

const App = () => {
  return (
    <PrimaryLayout>
      <SignUp />
    </PrimaryLayout>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/detail-form",
    element: <MoreDetailForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

export default App;
