import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CertifiedPage from "./@components/CertifiedPage";
import InstallAppPage from "./@components/InstallAppPage";
import LandingPage from "./@components/LandingPage";
import PhoneNumberPage from "./@components/PhoneNumberPage";
import { postSmsSend } from "./apis/sms.api";
import { routePaths } from "./core/routes/path";
import { IPostPhoneNumber } from "./types/sms";

export default function Router() {
  const [postPhoneNum, setPostPhoneNum] = useState<IPostPhoneNumber>({
    phoneNumber: "",
  });

  const sendSms = async () => {
    await postSmsSend(postPhoneNum);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePaths.Landing} element={<LandingPage />} />
        <Route path={routePaths.InstallApp} element={<InstallAppPage />} />
        <Route
          path={routePaths.PhoneNum}
          element={<PhoneNumberPage setPostPhoneNum={setPostPhoneNum} sendSms={sendSms} />}
        />
        <Route path={routePaths.Certified} element={<CertifiedPage sendSms={sendSms} postPhoneNum={postPhoneNum} />} />
      </Routes>
    </BrowserRouter>
  );
}
