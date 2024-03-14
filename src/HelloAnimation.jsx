import { TypeAnimation } from "react-type-animation";
import "./HelloAnimation.scss";

const TextAnimation = () => {
  return (
    <div className="boxText">
      <TypeAnimation
        sequence={[
          "Hello World !",
          2000,
          "Welcome to my PortFolio!",
          2000,
          "I'm Alexandre THOUNY.",
          2000,
        ]}
        wrapper="span"
        speed={30}
        className="HelloAnimation"
        repeat={Infinity}
      />
    </div>
  );
};

export default TextAnimation;
