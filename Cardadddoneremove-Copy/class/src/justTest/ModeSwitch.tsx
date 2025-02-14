import { useState } from "react";
import { BiMoon } from "react-icons/bi";
import { IoSunny } from "react-icons/io5";

const ModeSwitch = () => {
  const [isMode, setIsMode] = useState<boolean>(false);

  const styleDIV: React.CSSProperties = {
    color: isMode ? "black" : "white",
    backgroundColor: isMode ? "white" : "blue",
    width: "100%",
    height: "100vh",
  };
  const TouchSwitch = () => {
    setIsMode(!isMode);
  };

  return (
    <div style={styleDIV}>
      <button onClick={TouchSwitch}>{isMode ? <BiMoon /> : <IoSunny />}</button>
    </div>
  );
};

export default ModeSwitch;
