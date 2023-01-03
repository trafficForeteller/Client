import { BrowserRouter, Route, Routes } from "react-router-dom";

import InstallApp from "./@components/InstallAppPage";
import LandingPage from "./@components/LandingPage";
import PhoneNumberPage from "./@components/PhoneNumberPage";
import { routePaths } from "./core/routes/path";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePaths.Landing} element={<LandingPage />} />
        <Route path={routePaths.InstallApp} element={<InstallApp />} />
        <Route path={routePaths.PhoneNum} element={<PhoneNumberPage />} />
      </Routes>
    </BrowserRouter>
  );
}
