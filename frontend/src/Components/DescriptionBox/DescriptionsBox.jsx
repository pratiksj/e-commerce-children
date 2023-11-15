import "./DescriptionsBox.css";

export const DescriptionsBox = (props) => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>{props.product.description}</p>
      </div>
    </div>
  );
};
