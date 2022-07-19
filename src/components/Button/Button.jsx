import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ link, children }) => {
  return (
    <button className="buttonLink">
      <Link to={link}>{children}</Link>
    </button>
  );
};

export default Button;
