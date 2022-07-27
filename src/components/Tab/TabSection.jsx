import "./Tab.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rewardTabContents from "../../data/rewardTabContents";
import { useState, useRef } from "react";
import img25 from "../../assets/images/reward/favorite/025.webp";
import img50 from "../../assets/images/reward/favorite/050.webp";
import img150 from "../../assets/images/reward/favorite/150.webp";
import img200 from "../../assets/images/reward/favorite/200.webp";
import img400 from "../../assets/images/reward/favorite/400.webp";

const TabSection = () => {
  const tabImages = {
    25: img25,
    50: img50,
    150: img150,
    200: img200,
    400: img400,
  };

  let activeClass = "";
  const [selectedTab, setSelectedTab] = useState("25");
  const [tabImage, setTabImage] = useState(img25);
  const ref25 = useRef();
  const ref50 = useRef();
  const ref150 = useRef();
  const ref200 = useRef();
  const ref400 = useRef();

  const activateTab = (tabIndex) => {
    ref25.current.classList.remove("active");
    ref50.current.classList.remove("active");
    ref150.current.classList.remove("active");
    ref200.current.classList.remove("active");
    ref400.current.classList.remove("active");
    setSelectedTab(tabIndex);
    setTabImage(tabImages[tabIndex]);
  };

  return (
    <>
      <section className="tabs-section">
        <h2>Get your favorites for free</h2>
        <div className="tabs">
          <span
            className="active"
            ref={ref25}
            role="button"
            onClick={() => {
              activateTab("25");
              ref25.current.classList.add("active");
            }}
          >
            <span>25</span> <FontAwesomeIcon icon={faStar} size="2xs" />
          </span>

          <span
            ref={ref50}
            role="button"
            onClick={() => {
              activateTab("50");
              ref50.current.classList.add("active");
            }}
          >
            <span>50</span> <FontAwesomeIcon icon={faStar} size="2xs" />
          </span>

          <span
            ref={ref150}
            role="button"
            onClick={() => {
              activateTab("150");
              ref150.current.classList.add("active");
            }}
          >
            <span>150</span> <FontAwesomeIcon icon={faStar} size="2xs" />
          </span>

          <span
            ref={ref200}
            role="button"
            onClick={() => {
              activateTab("200");
              ref200.current.classList.add("active");
            }}
          >
            <span>200</span> <FontAwesomeIcon icon={faStar} size="2xs" />
          </span>

          <span
            ref={ref400}
            role="button"
            onClick={() => {
              activateTab("400");
              ref400.current.classList.add("active");
            }}
          >
            <span>400</span> <FontAwesomeIcon icon={faStar} size="2xs" />
          </span>
        </div>
      </section>
      <section className="tabs-contents">
        <div className="tab">
          <div>
            <img src={tabImage} alt="tab display" />
          </div>
          <div>
            <h3>{rewardTabContents[`${selectedTab}`].title}</h3>
            <p>{rewardTabContents[`${selectedTab}`].desc}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TabSection;
