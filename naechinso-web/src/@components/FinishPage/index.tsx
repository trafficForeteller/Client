import Finish from "./Finish";
import MagicFinish from "./MagicFinish";

export default function FinishPage() {
  return <>{localStorage.getItem("member-uuid") ? <MagicFinish /> : <Finish />}</>;
}
