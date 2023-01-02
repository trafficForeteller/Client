import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./@components/LandingPage";
import { routePaths } from "./core/routes/path";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
