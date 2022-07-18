import "./Navbar.css";
import logo from "../../starbucks-logo.svg";
import Wrapper from "../Wrapper/Wrapper";
import Toggle from "../UI/Toggle";
import MobileNav from "./MobileNav";
import { Link, NavLink } from "react-router-dom";
import {
  faLocationDot,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const NavBar = () => {
  const [toggleActive, setToggleActive] = useState(false);

  const toggleClick = () => {
    setToggleActive(!toggleActive);
  };

  return (
    <nav className="navbar">
      <Wrapper xClass="navbar_container">
        <div>
          <Link to="/" className="logo">
            <img src={logo} alt="starbucks logo" />
          </Link>
          <ul className="not-mobile">
            <li>
              <NavLink
                to="menu"
                className={({ isActive }) =>
                  isActive ? "link active" : "links"
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reward"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                reward
              </NavLink>
            </li>
            <li>
              <NavLink
                to="giftcard"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                gift cards
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="not-mobile">
          <Link to="findstore" className="button button_simple">
            <FontAwesomeIcon icon={faLocationDot} size="lg" />
            Find a store
          </Link>
          <Link to="signin" className="button button_outlined">
            Sign in
          </Link>
          <Link to="signup" className="button button_filled">
            Join now
          </Link>
        </div>
        <Toggle
          currentState={toggleActive}
          component={{ initial: faBars, next: faTimes }}
          onClick={toggleClick}
        />
      </Wrapper>
      <MobileNav currentState={toggleActive} />
    </nav>
  );
};

export default NavBar;
