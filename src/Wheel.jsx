import InnerRing from "./InnerRing";
import MiddleRing from "./MiddleRing";
import OuterRing from "./OuterRing";
import './Wheel.css'

function Wheel() {
  return (
    <div className="Wheel">
      {/* <OuterRing /> */}
      <MiddleRing />
      <InnerRing />
    </div>
  );
}

export default Wheel;
