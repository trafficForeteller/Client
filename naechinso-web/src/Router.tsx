import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import {
  AppealDetailPage,
  ArriveRecommendPage,
  CertifiedPage,
  ChooseGiftPage,
  ChooseJobPage,
  ChooseWorkPage,
  DontGoPage,
  EditFinishPage,
  EditPage,
  EditRecommenderLandingPage,
  EduCertifiedPage,
  EduEditPage,
  EduPage,
  ErrorPage,
  FinishPage,
  FreelancePage,
  FriendInfoPage,
  FriendLoverTypePage,
  InAppLandingPage,
  InstallAppPage,
  JobCertifiedPage,
  JobEditPage,
  JobPage,
  KeywordPage,
  LandingPage,
  PendingPage,
  PhoneNumberPage,
  PrepareWorkPage,
  RecommendationPage,
  RecommenderAuthLandingPage,
  RecommenderAuthPage,
  RecommenderInfoPage,
  RecommenderLandingPage,
  RecommendLandingPage,
  SecondRecommendPage,
  SelectiveQuestionPage,
  SelfEmployedCertifiedPage,
  SelfEmployedPage,
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
        <Route path={routePaths.MagicLink} element={<InAppLandingPage />} />
        <Route path={routePaths.InAppLanding} element={<InAppLandingPage />} />
        <Route path={routePaths.InstallApp} element={<InstallAppPage />} />
        <Route path={routePaths.Edit} element={<EditPage />} />
        <Route path={routePaths.Error} element={<ErrorPage />} />
        <Route path={routePaths.Recommendation} element={<RecommendationPage />} />

        <Route path={routePaths.RecommenderAuth} element={<RecommenderAuthPage />} />
        <Route
          path={routePaths.RecommenderAuthLanding}
          element={localStorage.getItem("accessToken") ? <RecommenderAuthLandingPage /> : <Navigate to="/" replace />}
        />

        <Route
          path={routePaths.PhoneNum}
          element={<PhoneNumberPage setPostPhoneNum={setPostPhoneNum} sendSms={sendSms} />}
        />
        <Route
          path={routePaths.Certified}
          element={<CertifiedPage sendSms={sendSms} postPhoneNum={postPhoneNum} token={token} setToken={setToken} />}
        />
        <Route
          path={routePaths.EditRecommender}
          element={localStorage.getItem("accessToken") ? <EditRecommenderLandingPage /> : <Navigate to="/" replace />}
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
          path={routePaths.EditFinish}
          element={localStorage.getItem("accessToken") ? <EditFinishPage /> : <Navigate to="/" replace />}
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
          path={routePaths.SecondRecommend}
          element={localStorage.getItem("accessToken") ? <SecondRecommendPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.AppealDetail}
          element={localStorage.getItem("accessToken") ? <AppealDetailPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.FriendLoverType}
          element={localStorage.getItem("accessToken") ? <FriendLoverTypePage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.DontGo}
          element={localStorage.getItem("accessToken") ? <DontGoPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.SelectiveQuestion}
          element={localStorage.getItem("accessToken") ? <SelectiveQuestionPage /> : <Navigate to="/" replace />}
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
        <Route
          path={routePaths.ChooseJob}
          element={localStorage.getItem("accessToken") ? <ChooseJobPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.Freelance}
          element={localStorage.getItem("accessToken") ? <FreelancePage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.SelfEmployed}
          element={localStorage.getItem("accessToken") ? <SelfEmployedPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.SelfEmployedCertified}
          element={localStorage.getItem("accessToken") ? <SelfEmployedCertifiedPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.PrepareWork}
          element={localStorage.getItem("accessToken") ? <PrepareWorkPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={routePaths.ChooseGift}
          element={localStorage.getItem("accessToken") ? <ChooseGiftPage /> : <Navigate to="/" replace />}
        />
        <Route path={routePaths.Arrive} element={<ArriveRecommendPage />} />
        <Route path={routePaths.Landing} element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
