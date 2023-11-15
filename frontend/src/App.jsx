import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import { Footer } from "./Components/Footer/Footer";
import { Banner } from "./Components/Banner/Banner";
import { getProduct } from "./reducers/productReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/social"
          element={
            <div>
              {" "}
              <Banner category="Social Skill learning" />
              <ShopCategory category="social skill" />{" "}
            </div>
          }
        />
        <Route
          path="/sensory"
          element={
            <div>
              {" "}
              <Banner category="Sensory" />
              <ShopCategory category="sensory" />
            </div>
          }
        />
        <Route path="/" element={<Product />} />

        <Route path="/product/:id" element={<Product />} />
        {/* <Route path='/product' element={<Product/>}/>
     <Route path=':productId' element={<Product/>}/> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
