import "./RelatedProduct.css";
import data_Product from "../assets/data";
import { Item } from "../Item/Item";

export const RelatedProduct = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_Product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new={item.new}
              old={item.old}
            />
          );
        })}
      </div>
    </div>
  );
};
