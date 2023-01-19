import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import {
  AppealDetailPage,
  CertifiedPage,
  ChooseQuestionPage,
  ChooseWorkPage,
  DontGoPage,
  EduCertifiedPage,
  EduEditPage,
  EduPage,
  FinishPage,
  FriendInfoPage,
  InstallAppPage,
  JobCertifiedPage,
  JobEditPage,
  JobPage,
  KeywordPage,
  LandingPage,
  PhoneNumberPage,
  RecommenderInfoPage,
  RecommenderLandingPage,
  RecommendLandingPage,
  RecommendPage,
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
          element={token["accessToken"] ? <JobEditPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.EduEdit}
          element={token["accessToken"] ? <EduEditPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.RecommendLanding}
          element={token["accessToken"] ? <RecommendLandingPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.FriendInfo}
          element={token["accessToken"] ? <FriendInfoPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.Keyword}
          element={token["accessToken"] ? <KeywordPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.ChooseQuestion}
          element={token["accessToken"] ? <ChooseQuestionPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.RecommenderInfo}
          element={token["accessToken"] ? <RecommenderInfoPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.Recommend}
          element={token["accessToken"] ? <RecommendPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.AppealDetail}
          element={token["accessToken"] ? <AppealDetailPage /> : <Navigate to="/" replace />}
        />
        <Route path={routePaths.DontGo} element={token["accessToken"] ? <DontGoPage /> : <Navigate to="/" replace />} />
        <Route
          path={routePaths.ChooseWork}
          element={token["accessToken"] ? <ChooseWorkPage /> : <Navigate to="/" replace />}
        />
        <Route path={routePaths.Job} element={token["accessToken"] ? <JobPage /> : <Navigate to="/" replace />} />
        <Route path={routePaths.Edu} element={token["accessToken"] ? <EduPage /> : <Navigate to="/" replace />} />
        <Route
          path={routePaths.JobCertified}
          element={token["accessToken"] ? <JobCertifiedPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.EduCertified}
          element={token["accessToken"] ? <EduCertifiedPage /> : <Navigate to="/" replace />}
        />
        <Route path={routePaths.Finish} element={token["accessToken"] ? <FinishPage /> : <Navigate to="/" replace />} />
        <Route
          path={routePaths.RecommenderLanding}
          element={token["accessToken"] ? <RecommenderLandingPage /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
