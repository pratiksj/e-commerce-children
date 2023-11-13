import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import { Footer } from "./Components/Footer/Footer";
import { Banner } from "./Components/Banner/Banner";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/social"
            element={
              <div>
                {" "}
                <Banner category="Social Skill learning" />
                <ShopCategory category="social skill learning" />{" "}
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
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          {/* <Route path='/product' element={<Product/>}/>
     <Route path=':productId' element={<Product/>}/> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
