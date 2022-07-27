import "./Menu.css";
import { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import Wrapper from "../../components/Wrapper/Wrapper";
import SubNav from "../../components/UI/SubNav";

const Menu = () => {
  return (
    <Fragment>
      <SubNav xClass="menu-nav">
        <p>aksdjflkadj</p>
      </SubNav>
      <Wrapper xClass="menu-section">
        <div className="menu-list">
          <div>
            <h3>Drinks</h3>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="menu">asdfasd</div>
      </Wrapper>
      <Footer />
    </Fragment>
  );
};

export default Menu;
