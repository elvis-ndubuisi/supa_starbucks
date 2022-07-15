import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BrandHandle = ({ icon }) => {
  return (
    <span className="brand-social-handle">
      <FontAwesomeIcon icon={icon} />
    </span>
  );
};

export default BrandHandle;
