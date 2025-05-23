import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { Toaster } from "@/components/ui/sonner";
import LoginPage from "./pages/LoginPage";
import NewProfilePage from "./pages/NewProfilePage";
import MainPageLayout from "./components/main-page-layout";
import DashboardPage from "./pages/DashboardPage";
import SubmitReportPage from "./pages/SubmitReportPage";
import LostItemsPage from "./pages/LostItemsPage";
import FoundItemsPage from "./pages/FoundItemsPage";
import LostPetsPage from "./pages/LostPetsPage";
import FoundPetsPage from "./pages/FoundPetsPage";
import ReportPage from "./pages/ReportPage";
import EditReportPage from "./pages/EditReportPage";
import PageNotFound from "./pages/PageNotFound";

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
          <Route path="/lost-items" element={<LostItemsPage />} />
          <Route path="/found-items" element={<FoundItemsPage />} />
          <Route path="/lost-pets" element={<LostPetsPage />} />
          <Route path="/found-pets" element={<FoundPetsPage />} />
          <Route path="/report/:postId" element={<ReportPage />} />
          <Route path="/create-report" element={<SubmitReportPage />} />
          <Route path="/edit-report/:postId" element={<EditReportPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
