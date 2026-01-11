import PanelMouseLogger from "./PanelMouseLogger";
import PointMouseLogger from "./PointMouseLogger";
import withMousePosition from "./withMousePosition";

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

export default function Mouse() {
  return (
    <section className="">
      <PanelMouseTracker />
      <PointMouseTracker />
    </section>
  );
}
