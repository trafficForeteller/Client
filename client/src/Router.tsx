import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LandingPage, LoginPage, RecommendBookPage, RecordPage, SearchPage, SiginInPage } from "./@components";
import { routePaths } from "./core/routes/path";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePaths.Landing} element={<LandingPage />} />
        <Route path={routePaths.Login} element={<LoginPage />} />
        <Route path={routePaths.SiginIn} element={<SiginInPage />} />
        <Route path={routePaths.RecommendBook} element={<RecommendBookPage />} />
        <Route path={routePaths.Search} element={<SearchPage />} />
        <Route path={routePaths.Record} element={<RecordPage />} />
      </Routes>
    </BrowserRouter>
  );
}
