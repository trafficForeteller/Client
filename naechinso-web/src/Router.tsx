import { BrowserRouter, Route, Routes } from "react-router-dom";

import CertifiedPage from "./@components/CertifiedPage";
import InstallAppPage from "./@components/InstallAppPage";
import LandingPage from "./@components/LandingPage";
import PhoneNumberPage from "./@components/PhoneNumberPage";
import { routePaths } from "./core/routes/path";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePaths.Landing} element={<LandingPage />} />
        <Route path={routePaths.InstallApp} element={<InstallAppPage />} />
        <Route path={routePaths.PhoneNum} element={<PhoneNumberPage />} />
        <Route path={routePaths.Certified} element={<CertifiedPage />} />
      </Routes>
    </BrowserRouter>
  );
}
