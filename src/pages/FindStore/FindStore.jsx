import "./Findstore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import StoreResult from "./StoreResult";

const FindStore = () => {
  return (
    <section className="findstore">
      <div className="finder">
        <form action="" className="search-field">
          <div>
            <input type="text" placeholder="Find a store" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <button className="button button_search" type="submit">
            Filter
          </button>
        </form>
        <div className="search-result">
          <StoreResult
            storeName="SafeWay Omak 2334"
            storeAddress="607 Omache RD, Omak"
            storeStatus="closed"
          />
        </div>
      </div>
      <div className="map">map</div>
    </section>
  );
};

export default FindStore;
