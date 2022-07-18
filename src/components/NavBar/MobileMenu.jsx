import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const MobileMenu = ({ setMenuState }) => {
  return (
    <section className="mobile-menu">
      <div className="header" onClick={() => setMenuState(false)}>
        <FontAwesomeIcon icon={faChevronLeft} />
        <span>menu</span>
        <span></span>
      </div>
      <div className="body">
        <Link to="/">All products</Link>
        <Link to="/">Featured</Link>
        <Link to="/">Previous Orders</Link>
        <Link to="/">Favourite Products</Link>
      </div>
    </section>
  );
};

export default MobileMenu;
