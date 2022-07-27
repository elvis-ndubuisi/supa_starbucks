import Wrapper from "../Wrapper/Wrapper";

const SubNav = ({ xClass, children }) => {
  return (
    <div className={`sub-nav ${xClass}`}>
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default SubNav;
