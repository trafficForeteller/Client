import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  AppealDetailPage,
  CertifiedPage,
  ChooseJobPage,
  ChooseQuestionPage,
  DontGoPage,
  FriendInfoPage,
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
        <Route path={routePaths.FriendInfo} element={<FriendInfoPage />} />
        <Route path={routePaths.Keyword} element={<KeywordPage />} />
        <Route path={routePaths.ChooseQuestion} element={<ChooseQuestionPage />} />
        <Route path={routePaths.RecommenderInfo} element={<RecommenderInfoPage />} />
        <Route path={routePaths.Recommend} element={<RecommendPage />} />
        <Route path={routePaths.AppealDetail} element={<AppealDetailPage />} />
        <Route path={routePaths.DontGo} element={<DontGoPage />} />
        <Route path={routePaths.ChooseJob} element={<ChooseJobPage />} />
      </Routes>
    </BrowserRouter>
  );
}
