const CashCard = ({ title, subtitle, children }) => {
  return (
    <div className="cashcard">
      <div>
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
      {children}
    </div>
  );
};

export default CashCard;
