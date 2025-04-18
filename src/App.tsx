import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
