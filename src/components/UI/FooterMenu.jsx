import "./ui.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const FooterMenu = ({ menuTitle, menulist }) => {
  const Menu = Object.entries(menulist).map(([key, value]) => {
    return (
      <Fragment key={key}>
        <Link to={value}>{key}</Link>
      </Fragment>
    );
  });
  return (
    <div>
      <p className="menu-title">{menuTitle}</p>
      <div className="menu-list">{Menu}</div>
    </div>
  );
};

export default FooterMenu;
