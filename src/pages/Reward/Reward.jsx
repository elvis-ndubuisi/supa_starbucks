import "./Reward.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import { Link } from "react-router-dom";
import HeadSubFlex from "../../components/UI/HeadSubFlex";
import HeadSubFlexItem from "../../components/UI/HeadSubFlexItem";
import TabSection from "../../components/Tab/TabSection";
import gettingStarted from "../../assets/images/reward/getting-started-1@2x.webp";
import gettingStarted2 from "../../assets/images/reward/getting-started-2@2x.webp";
import gettingStarted3 from "../../assets/images/reward/getting-started-3@2x.webp";
import funFrebies from "../../assets/images/reward/1-fun-freebies.webp";
import orderAndPay from "../../assets/images/reward/2-order-and-pay-ahead.webp";
import getToFree from "../../assets/images/reward/3-get-to-free-faster.webp";
import Footer from "../../components/Footer/Footer";
import { Fragment } from "react";
import CashCard from "./CashCard";
import CardCardItem from "./CardCardItem";
import SubNav from "../../components/UI/SubNav";
import a1 from "../../assets/images/reward/cashcard/1A.png";
import a2 from "../../assets/images/reward/cashcard/1B.webp";
import b1 from "../../assets/images/reward/cashcard/2A.webp";
import b2 from "../../assets/images/reward/cashcard/2B.webp";

const Reward = () => {
  return (
    <Fragment>
      <section className="reward">
        <SubNav xClass="starbuck">
          <p>STARBUCKS® REWARDS</p>
        </SubNav>
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
              <HeadSubFlexItem>
                <img src={gettingStarted} alt="create an account" />
                <h3>Create an account</h3>
                <p>
                  To get started, <Link to="/join">join now</Link>. You can also
                  <a href="/"> join in the app</a> to get access to the full
                  range of Starbucks® Rewards benefits.
                </p>
              </HeadSubFlexItem>
              <HeadSubFlexItem>
                <img src={gettingStarted2} alt="order and pay how you'd like" />
                <h3>Order and pay how you’d like</h3>
                <p>
                  Use cash, credit/debit card or save some time and pay right
                  through the app. You’ll collect Stars all ways.
                  <a href="/"> Learn how</a>
                </p>
              </HeadSubFlexItem>
              <HeadSubFlexItem>
                <img src={gettingStarted3} alt="earn starts, get reward" />
                <h3>Earn Stars, get Rewards</h3>
                <p>
                  As you earn Stars, you can redeem them for Rewards—like free
                  food, drinks, and more. Start redeeming with as little as 25
                  Stars!
                </p>
              </HeadSubFlexItem>
            </section>
          </HeadSubFlex>

          <TabSection />

          <HeadSubFlex>
            <h2>Endless Extras</h2>
            <p>
              Joining Starbucks® Rewards means unlocking access to exclusive
              benefits. Say hello to easy ordering, tasty Rewards and—yes, free
              coffee.
            </p>
            <section>
              <HeadSubFlexItem>
                <img src={funFrebies} alt="Fun freebies" className="lg" />
                <h3>Fun freebies</h3>
                <p>
                  Not only can you earn free coffee, look forward to a birthday
                  treat plus coffee and tea refills.
                </p>
                <a href="/">Learn more</a>
              </HeadSubFlexItem>
              <HeadSubFlexItem>
                <img src={orderAndPay} alt="Order & pay ahead" className="lg" />
                <h3>Order & pay ahead</h3>
                <p>
                  Enjoy the convenience of in-store, curbside or drive-thru
                  pickup at select stores.
                </p>
                <a href="/">Learn more</a>
              </HeadSubFlexItem>
              <HeadSubFlexItem>
                <img src={getToFree} alt="Get to free faster" className="lg" />
                <h3>Get to free faster</h3>
                <p>
                  Earn Stars even quicker with Bonus Star challenges, Double
                  Star Days and exciting games.
                </p>
                <a href="/">Learn more</a>
              </HeadSubFlexItem>
            </section>
          </HeadSubFlex>

          <HeadSubFlex xClass="cash-card-stars">
            <h2>Cash or card, you earn Stars</h2>
            <p>
              No matter how you pay, you can earn Stars with your morning
              coffee. Those Stars add up to (really delicious) Rewards.
            </p>

            <section className="content">
              <CashCard title="1★ per dollar" subtitle="Pay as you go">
                <CardCardItem img={a1} title="Scan and pay separately">
                  Use cash or credit/debit card at the register.
                </CardCardItem>
                <CardCardItem img={a2} title="Save payment in the app">
                  Check-out faster by saving a credit/debit card or PayPal to
                  your account. You’ll be able to order ahead or scan and pay at
                  the register in one step.
                </CardCardItem>
              </CashCard>
              <hr />
              <CashCard title="2★ per dollar" subtitle="Add funds in the app">
                <CardCardItem img={b1} title="Preload">
                  Use cash or credit/debit card at the register.
                </CardCardItem>
                <CardCardItem img={b2} title="Register your gift card">
                  Check-out faster by saving a credit/debit card or PayPal to
                  your account. You’ll be able to order ahead or scan and pay at
                  the register in one step.
                </CardCardItem>
              </CashCard>
            </section>
          </HeadSubFlex>

          <Wrapper xClass="star-code">
            <h2>Star Codes</h2>
            <p>
              Yesssss. You’ve got Stars in your hand. Enter your code here and
              we’ll add Stars to your account.
            </p>
            <form action=""></form>
          </Wrapper>

          <Wrapper xClass="star-code">
            <h2>Questions?</h2>
            <p>
              We want to help in any way we can. You can ask your barista
              anytime or we’ve answered the most commonly asked questions{" "}
              <a href="/">right over here</a>
            </p>
            <form action=""></form>
          </Wrapper>

          <section className="term-of-use">
            <Wrapper xClass="container">
              <small>At participating stores. Restrictions apply.</small>
              <div>
                <h3>EARNING STARS</h3>

                <p>
                  Stars cannot be earned on purchases of alcohol, Starbucks
                  Cards or Starbucks Card reloads.
                </p>

                <p>
                  Earn 1 Star per $1 spent when you scan your member barcode in
                  the app, then pay with cash, credit/debit cards or mobile
                  wallets at participating stores. You can also earn 1 Star per
                  $1 spent when you link a payment method and pay directly
                  through the app.
                </p>

                <p>
                  Earn 2 Stars per $1 spent when you load funds and pay with
                  your digital Starbucks Card in the app. You can also earn 2
                  Stars per $1 spent when you pay in-person at a participating
                  store with your registered physical Starbucks Card or scan
                  your member barcode in the app, and then use any physical
                  Starbucks Card (regardless of whether it is registered) to
                  complete the purchase.
                </p>
              </div>

              <div>
                <h3>TERMS OF USE</h3>

                <p>
                  For full program details visit{" "}
                  <a href="/">starbucks.com/rewards/terms</a>
                </p>

                <p>
                  * Earn 1 Star per $1 when digitally loading your Starbucks
                  Card with your Starbucks® Rewards Visa® Card: See your Card
                  Rewards Program Agreement for more details
                </p>

                <p>
                  Starbucks® Rewards benefits are available at participating
                  Starbucks stores. Not all stores have the ability to honor
                  Rewards at this time. Visit the{" "}
                  <Link to="/locator">Starbucks Store Locator</Link> opens in
                  new window and search for locations honoring “Redeem Rewards”.
                </p>

                <p>
                  Deposit and credit card products provided by JPMorgan Chase
                  Bank, N.A. Member FDIC
                </p>
              </div>

              <div>
                <h3>BENEFITS</h3>

                <p>
                  Free refills available during same in-store visit only. To
                  qualify for the Birthday Reward, you must have made at least
                  one Star-earning transaction.
                </p>
              </div>

              <div>
                <h3>REDEEMING REWARDS</h3>

                <p>
                  Rewards cannot be redeemed for alcoholic beverages or
                  multi-serve items. Not all stores honor tiered Rewards. Select
                  stores redeem 150 Stars for free food or drink items only.
                </p>
              </div>
            </Wrapper>
          </section>
        </main>
      </section>

      <Footer />
    </Fragment>
  );
};

export default Reward;
