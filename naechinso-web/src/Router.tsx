import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import {
  AppealDetailPage,
  CertifiedPage,
  ChooseFirstQuestionPage,
  ChooseSecondQuestionPage,
  ChooseWorkPage,
  DontGoPage,
  EduCertifiedPage,
  EduEditPage,
  EduPage,
  FinishPage,
  FirstRecommendPage,
  FriendInfoPage,
  InstallAppPage,
  JobCertifiedPage,
  JobEditPage,
  JobPage,
  KeywordPage,
  LandingPage,
  PendingPage,
  PhoneNumberPage,
  RecommenderInfoPage,
  RecommenderLandingPage,
  RecommendLandingPage,
  SecondRecommendPage,
} from "./@components";
import { ScrollToTop } from "./@components/@common";
import { postSmsSend } from "./apis/sms.api";
import { routePaths } from "./core/routes/path";
import { ITokenType } from "./types/member";
import { IPostPhoneNumber } from "./types/sms";

export default function Router() {
  const [postPhoneNum, setPostPhoneNum] = useState<IPostPhoneNumber>({
    phoneNumber: "",
  });
  const [token, setToken] = useState<ITokenType>({ registerToken: "", accessToken: "" });

  const sendSms = async () => {
    await postSmsSend(postPhoneNum);
  };
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={routePaths.MagicLink} element={<LandingPage />} />
        <Route path={routePaths.Landing} element={<LandingPage />} />
        <Route path={routePaths.InstallApp} element={<InstallAppPage />} />
        <Route
          path={routePaths.PhoneNum}
          element={<PhoneNumberPage setPostPhoneNum={setPostPhoneNum} sendSms={sendSms} />}
        />
        <Route
          path={routePaths.Certified}
          element={<CertifiedPage sendSms={sendSms} postPhoneNum={postPhoneNum} token={token} setToken={setToken} />}
        />
        <Route
          path={routePaths.JobEdit}
          element={localStorage.getItem("accessToken") ? <JobEditPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.EduEdit}
          element={localStorage.getItem("accessToken") ? <EduEditPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.Pending}
          element={localStorage.getItem("accessToken") ? <PendingPage /> : <Navigate to="/" replace />}
        />
        <Route path={routePaths.RecommendLanding} element={<RecommendLandingPage />} />
        <Route
          path={routePaths.FriendInfo}
          element={localStorage.getItem("accessToken") ? <FriendInfoPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.Keyword}
          element={localStorage.getItem("accessToken") ? <KeywordPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.RecommenderInfo}
          element={localStorage.getItem("accessToken") ? <RecommenderInfoPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.ChooseFirstQuestion}
          element={localStorage.getItem("accessToken") ? <ChooseFirstQuestionPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.FirstRecommend}
          element={localStorage.getItem("accessToken") ? <FirstRecommendPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.ChooseSecondQuestion}
          element={localStorage.getItem("accessToken") ? <ChooseSecondQuestionPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.SecondRecommend}
          element={localStorage.getItem("accessToken") ? <SecondRecommendPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.AppealDetail}
          element={localStorage.getItem("accessToken") ? <AppealDetailPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.DontGo}
          element={localStorage.getItem("accessToken") ? <DontGoPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.ChooseWork}
          element={localStorage.getItem("accessToken") ? <ChooseWorkPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.Job}
          element={localStorage.getItem("accessToken") ? <JobPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.Edu}
          element={localStorage.getItem("accessToken") ? <EduPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.JobCertified}
          element={localStorage.getItem("accessToken") ? <JobCertifiedPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.EduCertified}
          element={localStorage.getItem("accessToken") ? <EduCertifiedPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.Finish}
          element={localStorage.getItem("accessToken") ? <FinishPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.RecommenderLanding}
          element={localStorage.getItem("accessToken") ? <RecommenderLandingPage /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
