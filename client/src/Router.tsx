import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LandingPage, SiginInPage } from "./@components";
import { routePaths } from "./core/routes/path";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePaths.Landing} element={<LandingPage />} />
        <Route path={routePaths.SiginIn} element={<SiginInPage />} />
      </Routes>
    </BrowserRouter>
  );
}
