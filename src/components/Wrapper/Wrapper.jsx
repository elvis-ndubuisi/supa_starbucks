import "./Wrapper.css";

const Wrapper = ({ children, xClass }) => {
  return <section className={`wrapper ${xClass}`}>{children}</section>;
};

export default Wrapper;
