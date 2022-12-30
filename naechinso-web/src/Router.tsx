import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routePaths } from "./core/routes/path";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePaths.Main} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}