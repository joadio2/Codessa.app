import Lottie from "lottie-react";
import robot from "../../assets/lottie/robot.json";
export default function RobotHero() {
  return (
    <Lottie
      animationData={robot}
      loop={true}
      autoplay={true}
      style={{ width: "50%", height: "50%" }}
    />
  );
}
