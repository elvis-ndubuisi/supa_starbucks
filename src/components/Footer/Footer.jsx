import "./Footer.css";
import Wrapper from "../Wrapper/Wrapper";
import FooterMenu from "../UI/FooterMenu";
import {
  aboutMenu,
  careerMenu,
  socialMenu,
  OPMenu,
  businessMenu,
} from "../../data/footerInfo";
import BrandHandle from "../UI/BrandHandle";
import {
  faFacebookF,
  faTwitter,
  faSpotify,
  faPinterest,
  faYoutubeSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <Wrapper>
        <section className="footer_menuList">
          <FooterMenu menuTitle="about us" menulist={aboutMenu} />
          <FooterMenu menuTitle="career" menulist={careerMenu} />
          <FooterMenu menuTitle="social impact" menulist={socialMenu} />
          <FooterMenu
            menuTitle="for business partners"
            menulist={businessMenu}
          />
          <FooterMenu menuTitle="Order and Pickup" menulist={OPMenu} />
        </section>
        <hr />
        <section className="footer_foot">
          <div>
            <BrandHandle icon={faSpotify} />
            <BrandHandle icon={faFacebookF} />
            <BrandHandle icon={faPinterest} />
            <BrandHandle icon={faInstagram} />
            <BrandHandle icon={faYoutubeSquare} />
            <BrandHandle icon={faTwitter} />
          </div>
          <div>
            <a href="/">Privacy Policy</a>
            <span className="divider"></span>
            <a href="/">Terms of Use</a>
            <span className="divider"></span>
            <a href="/">CA Supply Chain Act</a>
            <span className="divider"></span>
            <a href="/">Cookie Preferences</a>
          </div>
          <small>© 2022 Starbucks Coffee Company. All rights reserved.</small>
        </section>
      </Wrapper>
    </footer>
  );
};

export default Footer;
