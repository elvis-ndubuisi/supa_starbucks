const ProductBanner = () => {
  let productImg = "";
  let productName = "Caffè Americano";
  let productCalories = 5;
  return (
    <section>
      {productImg}
      <div>
        <h2>{productName}</h2>
        <p>
          {productCalories} calories <span>+</span>
        </p>
      </div>
    </section>
  );
};

export default ProductBanner;
