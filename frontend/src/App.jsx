import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { Footer } from "./Components/Footer/Footer";
import { Banner } from "./Components/Banner/Banner";
import { getProduct } from "./reducers/productReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { SignIn } from "./Pages/signin";
import { Signup } from "./Pages/Signup";
import { fromGoogle } from "./reducers/userReducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
    const cookies = document.cookie.split(";");
    let loggedInuser = null;
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];

      if (cookie.startsWith("user=")) {
        loggedInuser = cookie.substring("user=".length, cookie.length);
        break;
      }
    }
    const decodedUrl = decodeURIComponent(loggedInuser);
    const jsonObject = JSON.parse(decodedUrl);

    dispatch(fromGoogle(jsonObject));
    // Access all cookies
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
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
