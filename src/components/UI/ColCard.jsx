import "./ui.css";

const ColCard = ({ diffColor, bgColor, children }) => {
  let isDiffColor = Boolean(diffColor || false);
  let diffColor_style = "";

  if (isDiffColor === true) {
    diffColor_style = "clrBrand";
  }
  return (
    <section
      className={`ColCard ${diffColor_style}`}
      style={{ backgroundColor: `${bgColor}` }}
    >
      {children}
    </section>
  );
};

export default ColCard;
