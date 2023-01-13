import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  AppealDetailPage,
  CertifiedPage,
  ChooseQuestionPage,
  ChooseWorkPage,
  DontGoPage,
  FriendInfoPage,
  InstallAppPage,
  JobPage,
  KeywordPage,
  LandingPage,
  PhoneNumberPage,
  RecommenderInfoPage,
  RecommendPage,
  SchoolPage,
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
        <Route path={routePaths.ChooseWork} element={<ChooseWorkPage />} />
        <Route path={routePaths.Job} element={<JobPage />} />
        <Route path={routePaths.School} element={<SchoolPage />} />
      </Routes>
    </BrowserRouter>
  );
}
