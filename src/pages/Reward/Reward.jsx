import "./Reward.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import { Link } from "react-router-dom";
import HeadSubFlex from "../../components/UI/HeadSubFlex";
import HeadSubFlex_Flex from "../../components/UI/HeadSubFlex_Item";
import gettingStarted from "../../assets/images/reward/getting-started-1@2x.webp";
import gettingStarted2 from "../../assets/images/reward/getting-started-2@2x.webp";
import gettingStarted3 from "../../assets/images/reward/getting-started-3@2x.webp";
import funFrebies from "../../assets/images/reward/1-fun-freebies.webp";
import orderAndPay from "../../assets/images/reward/2-order-and-pay-ahead.webp";
import getToFree from "../../assets/images/reward/3-get-to-free-faster.webp";

const Reward = () => {
  return (
    <section className="reward">
      <div className="starbuck">
        <Wrapper>
          <p>STARBUCKS® REWARDS</p>
        </Wrapper>
      </div>
      <main className="main">
        <div className="landing">
          <Wrapper>
            <h2>
              free coffee
              <br />
              is a tap away
            </h2>

            <p>Join now to start earning Rewards.</p>

            <div className="join">
              <Link to="/join" className="button button_filled">
                Join now
              </Link>
              <span>
                Or <Link to="join-app">join in the app</Link> for the best
                experience
              </span>
            </div>
          </Wrapper>
        </div>
        <HeadSubFlex>
          <h2>Getting started is easy</h2>
          <p>Earn Stars and get rewarded in a few easy steps.</p>

          <section>
            <HeadSubFlex_Flex>
              <img src={gettingStarted} alt="create an account" />
              <h3>Create an account</h3>
              <p>
                To get started, <Link to="/join">join now</Link>. You can also
                <a href="/"> join in the app</a> to get access to the full range
                of Starbucks® Rewards benefits.
              </p>
            </HeadSubFlex_Flex>
            <HeadSubFlex_Flex>
              <img src={gettingStarted2} alt="order and pay how you'd like" />
              <h3>Order and pay how you’d like</h3>
              <p>
                Use cash, credit/debit card or save some time and pay right
                through the app. You’ll collect Stars all ways.
                <a href="/"> Learn how</a>
              </p>
            </HeadSubFlex_Flex>
            <HeadSubFlex_Flex>
              <img src={gettingStarted3} alt="earn starts, get reward" />
              <h3>Earn Stars, get Rewards</h3>
              <p>
                As you earn Stars, you can redeem them for Rewards—like free
                food, drinks, and more. Start redeeming with as little as 25
                Stars!
              </p>
            </HeadSubFlex_Flex>
          </section>
        </HeadSubFlex>

        <HeadSubFlex>
          <h2>Endless Extras</h2>
          <p>
            Joining Starbucks® Rewards means unlocking access to exclusive
            benefits. Say hello to easy ordering, tasty Rewards and—yes, free
            coffee.
          </p>
          <section>
            <HeadSubFlex_Flex>
              <img src={funFrebies} alt="Fun freebies" className="lg" />
              <h3>Fun freebies</h3>
              <p>
                Not only can you earn free coffee, look forward to a birthday
                treat plus coffee and tea refills.
              </p>
              <a href="">Learn more</a>
            </HeadSubFlex_Flex>
            <HeadSubFlex_Flex>
              <img src={orderAndPay} alt="Order & pay ahead" className="lg" />
              <h3>Order & pay ahead</h3>
              <p>
                Enjoy the convenience of in-store, curbside or drive-thru pickup
                at select stores.
              </p>
              <a href="">Learn more</a>
            </HeadSubFlex_Flex>
            <HeadSubFlex_Flex>
              <img src={getToFree} alt="Get to free faster" className="lg" />
              <h3>Get to free faster</h3>
              <p>
                Earn Stars even quicker with Bonus Star challenges, Double Star
                Days and exciting games.
              </p>
              <a href="">Learn more</a>
            </HeadSubFlex_Flex>
          </section>
        </HeadSubFlex>
      </main>
    </section>
  );
};

export default Reward;
