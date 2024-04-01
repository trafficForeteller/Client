import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LandingPage, RecommendBookPage, SiginInPage } from "./@components";
import { routePaths } from "./core/routes/path";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePaths.Landing} element={<LandingPage />} />
        <Route path={routePaths.SiginIn} element={<SiginInPage />} />
        <Route path={routePaths.RecommendBook} element={<RecommendBookPage />} />
      </Routes>
    </BrowserRouter>
  );
}
