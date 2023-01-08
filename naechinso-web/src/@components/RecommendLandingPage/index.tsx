import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RecommendLandingPage() {
  const location = useLocation();
  const { token } = location.state;

  useEffect(() => {
    if (token) console.log("token", token);
  }, []);

  return <div>RecommendLandingPage</div>;
}
