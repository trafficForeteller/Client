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
  const accessToken = localStorage.getItem("accessToken") as string;

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
        <Route path={routePaths.JobEdit} element={accessToken ? <JobEditPage /> : <Navigate to="/" replace />} />
        <Route path={routePaths.EduEdit} element={accessToken ? <EduEditPage /> : <Navigate to="/" replace />} />
        <Route path={routePaths.Pending} element={accessToken ? <PendingPage /> : <Navigate to="/" replace />} />
        <Route path={routePaths.RecommendLanding} element={<RecommendLandingPage />} />
        <Route path={routePaths.FriendInfo} element={accessToken ? <FriendInfoPage /> : <Navigate to="/" replace />} />
        <Route path={routePaths.Keyword} element={accessToken ? <KeywordPage /> : <Navigate to="/" replace />} />
        <Route
          path={routePaths.RecommenderInfo}
          element={accessToken ? <RecommenderInfoPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.ChooseFirstQuestion}
          element={accessToken ? <ChooseFirstQuestionPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.FirstRecommend}
          element={accessToken ? <FirstRecommendPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.ChooseSecondQuestion}
          element={accessToken ? <ChooseSecondQuestionPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.SecondRecommend}
          element={accessToken ? <SecondRecommendPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.AppealDetail}
          element={accessToken ? <AppealDetailPage /> : <Navigate to="/" replace />}
        />
        <Route path={routePaths.DontGo} element={accessToken ? <DontGoPage /> : <Navigate to="/" replace />} />
        <Route path={routePaths.ChooseWork} element={accessToken ? <ChooseWorkPage /> : <Navigate to="/" replace />} />
        <Route path={routePaths.Job} element={accessToken ? <JobPage /> : <Navigate to="/" replace />} />
        <Route path={routePaths.Edu} element={accessToken ? <EduPage /> : <Navigate to="/" replace />} />
        <Route
          path={routePaths.JobCertified}
          element={accessToken ? <JobCertifiedPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.EduCertified}
          element={accessToken ? <EduCertifiedPage /> : <Navigate to="/" replace />}
        />
        <Route path={routePaths.Finish} element={accessToken ? <FinishPage /> : <Navigate to="/" replace />} />
        <Route
          path={routePaths.RecommenderLanding}
          element={accessToken ? <RecommenderLandingPage /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
