import "./Navbar.css";
import logo from "../../starbucks-logo.svg";
import Wrapper from "../Wrapper/Wrapper";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Wrapper xClass="navbar_container">
        <div>
          <a href="/">
            <img src={logo} alt="starbucks logo" />
          </a>
          <ul>
            <li className="links">
              <a href="/">menu</a>
            </li>
            <li className="links">
              <a href="/">reward</a>
            </li>
            <li className="links">
              <a href="/">gift card</a>
            </li>
          </ul>
        </div>
        <div>
          <a href="/findstore">find store</a>
          <a href="/signin">sign in</a>
          <a href="/signup">join</a>
        </div>
      </Wrapper>
    </nav>
  );
};

export default NavBar;
