import { createBrowserRouter } from "react-router";
import Homepage from "../pages/Homepage/Homepage";
import FormPage from "../pages/Form/Formpage";
import SuccessPage from "../pages/SuccessPage/SuccessPage";

export const router = createBrowserRouter([
  {
    path: "/Tako",
    element: <Homepage />,
  },
  {
    path: "/Tako/form",
    element: <FormPage />,
  },
  {
    path: "/Tako/success",
    element: <SuccessPage />,
  },
]);
