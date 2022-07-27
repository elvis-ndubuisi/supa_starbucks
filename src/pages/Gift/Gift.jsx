import "./Gift.css";
import SubNav from "../../components/UI/SubNav";
import Giftlayout from "./Giftlayout";
import img2 from "../../assets/images/gifts/placeholder (1).webp";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Gift = () => {
  return (
    <section className="gift">
      <SubNav xClass="starbuck">
        <p>STARBUCKS® Gifts</p>
      </SubNav>

      <main className="gift-list">
        <Giftlayout title="featured">
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
        </Giftlayout>
        <Giftlayout title="international friendship day">
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
        </Giftlayout>
        <Giftlayout title="birthday">
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
        </Giftlayout>
        <Giftlayout title="thank you">
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
          <Link to="#" className="singleGift">
            <img src={img2} alt="img1" />
          </Link>
        </Giftlayout>
      </main>

      <Footer />
    </section>
  );
};

export default Gift;
