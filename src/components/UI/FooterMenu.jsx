import "./ui.css";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import Toggle from "../UI/Toggle";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FooterMenu = ({ menuTitle, menulist }) => {
  const [toggleActive, setToggleActive] = useState(false);
  let active = toggleActive ? "active" : "";

  const Menu = Object.entries(menulist).map(([key, value]) => {
    return (
      <Fragment key={key}>
        <Link to={value}>{key}</Link>
      </Fragment>
    );
  });

  return (
    <div>
      <div className="menu-bar" onClick={() => setToggleActive(!toggleActive)}>
        <p className="menu-title">{menuTitle}</p>
        <Toggle
          currentState={toggleActive}
          component={{ initial: faChevronDown, next: faChevronUp }}
        />
      </div>
      <div className={`menu-list ${active}`}>{Menu}</div>
    </div>
  );
};

export default FooterMenu;
