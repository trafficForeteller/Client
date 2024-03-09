import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LandingPage } from "./@components";
import { routePaths } from "./core/routes/path";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePaths.Landing} element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
