import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  CertifiedPage,
  ChooseQuestionPage,
  InstallAppPage,
  KeywordPage,
  LandingPage,
  PhoneNumberPage,
  RecommenderInfoPage,
  RecommendPage,
} from "./@components";
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
        <Route path={routePaths.Recommend} element={<RecommendPage />} />
        <Route path={routePaths.Keyword} element={<KeywordPage />} />
        <Route path={routePaths.ChooseQuestion} element={<ChooseQuestionPage />} />
        <Route path={routePaths.RecommenderInfo} element={<RecommenderInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
