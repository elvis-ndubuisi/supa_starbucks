import "./Navbar.css";
import logo from "../../starbucks-logo.svg";
import Wrapper from "../Wrapper/Wrapper";
import { Link, NavLink } from "react-router-dom";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Wrapper xClass="navbar_container">
        <div>
          <Link to="/" className="logo">
            <img src={logo} alt="starbucks logo" />
          </Link>
          <ul>
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
                gift card
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Link to="findstore" className="button button_simple">
            <FontAwesomeIcon icon={faLocationPin} />
            Find a store
          </Link>
          <Link to="signin" className="button button_outlined">
            Sign in
          </Link>
          <Link to="signup" className="button button_filled">
            Join now
          </Link>
        </div>
      </Wrapper>
    </nav>
  );
};

export default NavBar;
