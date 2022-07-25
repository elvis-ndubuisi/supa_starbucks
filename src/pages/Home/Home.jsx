import "./Home.css";
import ColCard from "../../components/UI/ColCard";
import coldbrew from "../../assets/images/home/cold-brew.jpg";
import summer from "../../assets/images/home/summer.webp";
import refresh from "../../assets/images/home/refresh.jpg";
import hooray from "../../assets/images/home/hooray.jpg";
import disability from "../../assets/images/home/137-79094.webp";
import Wrapper from "../../components/Wrapper/Wrapper";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Wrapper>
        <section className="home">
          <ColCard bgColor="#1e3932">
            <div style={{ backgroundColor: "#dfeae3" }}>
              <img src={summer} alt="summer sale" />
            </div>
            <div>
              <h3>Turn Tuesdays into TuesYays with 50% off</h3>
              <p>
                Every Tuesday in July, Starbucks Rewards members can enjoy half
                off their favorite cold beverage.*
              </p>
              <Link to="/join" className="button button_outlined button_light">
                Join now
              </Link>
            </div>
          </ColCard>

          <ColCard bgColor="#f06464">
            <div>
              <img src={coldbrew} alt="cold brew chocolate cream" />
            </div>
            <div>
              <h2>Cold brew for two</h2>
              <p>
                Try the new Chocolate Cream Cold Brew with silky, chocolaty cold
                foam. Or go for a Vanilla Sweet Cream Cold Brew with house-made
                vanilla-flavored sweet cream.
              </p>
              <Link to="/" className="button button_outlined button_light">
                Learn more
              </Link>
            </div>
          </ColCard>

          <ColCard diffColor={true} bgColor="#fa91aa">
            <div>
              <img src={refresh} alt="refresh on repeat" />
            </div>
            <div>
              <h2>Refresh on repeat</h2>
              <p>
                Our vibrant Strawberry Açaí Lemonade and Mango Dragonfruit
                Lemonade Starbucks Refreshers® beverages are oh so chill.
              </p>
              <Link to="/" className="button button_outlined button_dark">
                Learn more
              </Link>
            </div>
          </ColCard>

          <ColCard bgColor="#007042">
            <div>
              <img src={hooray} alt="Hooray for cookies and cake" />
            </div>
            <div>
              <h2>Hooray for cookies and cake</h2>
              <p>
                The new Cookies & Cream Cake Pop is a happy mix of chocolate
                cake, crumbled cookies and white chocolaty icing.
              </p>
              <Link to="/" className="button button_outlined button_light">
                Order now
              </Link>
            </div>
          </ColCard>

          <ColCard bgColor="#d3e9e2">
            <div>
              <img src={disability} alt="celebrating disability pride month" />
            </div>
            <div>
              <h2>Celebrating Disability Pride Month</h2>
              <p>
                Alongside the Disability Advocacy Partner Network, we’re
                building more inclusive communities through awareness, action
                and allyship.
              </p>
              <Link to="/" className="button button_outlined button_light">
                Get involved
              </Link>
            </div>
          </ColCard>

          <p className="notice">
            *Summer TuesYays offer available at participating stores. Excludes
            ready to drink, bottled beverages and alcohol. Cannot be combined
            with other offers or discounts. Offer not available through
            delivery. Limit one per person.
          </p>
        </section>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Home;
