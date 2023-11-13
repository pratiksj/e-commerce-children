import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrums } from "../Components/Breadcrums/Breadcrums";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { DescriptionsBox } from "../Components/DescriptionBox/DescriptionsBox";
import { RelatedProduct } from "../Components/RelatedProduct/RelatedProduct";

export const Product = () => {
  const { all_Product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_Product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionsBox />
      <RelatedProduct />
    </div>
  );
};
