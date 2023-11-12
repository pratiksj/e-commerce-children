import "./Breadcrums.css";

export const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home<i className="fa fa-arrow-right"></i>Shop{" "}
      <i className="fa fa-arrow-right"></i>
      {product.category}
      <i className="fa fa-arrow-right"></i>
      {product.name}
    </div>
  );
};
