import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const MobileNav = ({ currentState }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  let activeClass = currentState ? "active" : "";

  return (
    <section className={`nav-mobile ${activeClass}`}>
      {!activeMenu ? (
        <>
          <nav>
            <span
              role="button"
              className="mobile-link"
              onClick={() => setActiveMenu(true)}
            >
              Menu
              <FontAwesomeIcon icon={faChevronRight} />
            </span>

            <NavLink
              to="reward"
              className={({ isActive }) =>
                isActive ? "mobile-link active" : "mobile-link"
              }
            >
              reward
            </NavLink>

            <NavLink
              to="reward"
              className={({ isActive }) =>
                isActive ? "mobile-link active" : "mobile-link"
              }
            >
              gift cards
            </NavLink>

            <div>
              <Link to="findstore" className="button button_simple">
                <FontAwesomeIcon icon={faLocationDot} size="lg" />
                Find a store
              </Link>
              <Link to="signin" className="button button_outlined">
                Sign in
              </Link>
              <Link to="join" className="button button_filled">
                Join now
              </Link>
            </div>
          </nav>
        </>
      ) : (
        <>
          <MobileMenu setMenuState={setActiveMenu} />
        </>
      )}
    </section>
  );
};

export default MobileNav;
