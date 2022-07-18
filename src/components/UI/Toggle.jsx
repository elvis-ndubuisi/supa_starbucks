import "./ui.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "react";

const Toggle = ({ currentState, component, onClick }) => {
  const { initial, next } = component;
  let activeIcon = initial;

  if (currentState !== false) {
    activeIcon = next;
  } else {
    activeIcon = initial;
  }

  return (
    <div className="toggle" onClick={onClick}>
      {<FontAwesomeIcon icon={activeIcon} />}
    </div>
  );
};

export default Toggle;
