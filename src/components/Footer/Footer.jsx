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
      </Wrapper>
    </footer>
  );
};

export default Footer;
