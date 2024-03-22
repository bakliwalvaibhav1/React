import { useRive } from "@rive-app/react-canvas";

const RiveAssert = () => {
  const { rive, RiveComponent } = useRive({
    src: "/7294-14261-wao.riv",
    stateMachines: "State Machine 1",
    autoplay: false,
  });

  return (
    <RiveComponent
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
    />
  );
};

export default RiveAssert;
