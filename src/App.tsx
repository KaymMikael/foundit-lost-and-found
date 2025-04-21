import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { Toaster } from "@/components/ui/sonner";
import LoginPage from "./pages/LoginPage";
import NewProfilePage from "./pages/NewProfilePage";
import MainPageLayout from "./components/main-page-layout";
import DashboardPage from "./pages/DashboardPage";
import SubmitReportPage from "./pages/SubmitReportPage";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/new-profile" element={<NewProfilePage />} />
        <Route element={<MainPageLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/submit-report" element={<SubmitReportPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
