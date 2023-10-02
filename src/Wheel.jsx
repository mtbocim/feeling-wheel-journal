import InnerRing from "./InnerRing";
import MiddleRing from "./MiddleRing";
import OuterRing from "./OuterRing";

function Wheel() {
  return (
    <div className="Wheel">
      <InnerRing />
      <MiddleRing />
      <OuterRing />
    </div>
  );
}

export default Wheel;
