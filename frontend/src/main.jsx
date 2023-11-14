import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";
import { ShopContextProvider } from "./Context/ShopContext.jsx";
import store from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ShopContextProvider>
);
