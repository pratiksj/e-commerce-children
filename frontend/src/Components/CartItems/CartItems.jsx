//import { useContext } from "react";
import "./CartItems.css";
//import { ShopContext } from "../../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useState } from "react";
export const CartItems = () => {
  const products = useSelector((state) => state.products);

  const cartItem = useSelector((state) => state.cart);
  console.log(cartItem, "item");

  const getProductDetails = (productId) => {
    return products.find((product) => product.product_id === productId);
  };
  const [quantities, setQuantity] = useState({});

  const updateQuantity = (productId, newQuantity) => {
    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity > 1 ? newQuantity : 1,
    }));
  };

  return (
    <div className="cartItems">
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>remove</p>
      </div>
      <hr />
      {cartItem.map((item) => {
        const product = getProductDetails(item.product_id);
        const quantity = quantities[item.product_id];

        if (product) {
          return (
            <div key={item.id}>
              <div className="cartitem-format cartitem-format-main">
                <img
                  src={product.image}
                  alt=""
                  className="carticon-product-icon"
                />
                <p>{product.name}</p>
                <p>Rs{product.price}</p>
                {/* <button className="cartitem-quantity">{}</button> */}
                <div className="cartitem-quantity-display">
                  <button
                    className="quantity-btn"
                    onClick={() =>
                      updateQuantity(item.product_id, quantity - 1)
                    }
                  >
                    -
                  </button>
                  <p className="quantity">{quantity ? quantity : 0}</p>
                  <button
                    className="quantity-btn"
                    onClick={() =>
                      updateQuantity(item.product_id, quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <p>Rs {}</p>

                <FontAwesomeIcon
                  className="cartitems-remove-icon"
                  icon={faXmark}
                  // onClick={() => {
                  //   removeFromCart(item.id);
                  // }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartItems-total">
          <h1>carts Totals</h1>
          <div>
            <div className="cartitems-total-items">
              <p>Subtotal</p>
              {/* <p>Rs {getTotalCartAmount()}</p> */}
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <h3>Total</h3>
              {/* <h3>Rs {getTotalCartAmount()}</h3> */}
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code,Enter it her</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
