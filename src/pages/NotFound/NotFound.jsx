import notFound from "../../assets/images/notfound.webp";
import "./NotFound.css";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";

const NotFound = () => {
  return (
    <Wrapper>
      <section className="notFound">
        <p>Page Not Found</p>
        <img src={notFound} alt="missing page animation" />
        <h2>Opps!</h2>
        <p>We can’t find the page that you’re looking for.</p>
        <p>
          Please try retyping the URL or visit <Link to="/">starbucks.com</Link>
        </p>
      </section>
    </Wrapper>
  );
};

export default NotFound;
