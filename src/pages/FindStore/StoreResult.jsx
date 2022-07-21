import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";

const StoreResult = ({
  storeName,
  storeAddress,
  storeStatus,
  storeWarning,
  inStore,
}) => {
  return (
    <button className="store-result">
      <div>
        <h3>{storeName}</h3>
        <p>{storeAddress}</p>
        <p>{storeStatus}</p>
        <span>{storeWarning}</span>
        <span>{inStore}</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faIdBadge} />
      </div>
    </button>
  );
};

export default StoreResult;
