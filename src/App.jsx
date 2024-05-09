import "./App.css";
import Login from "./assets/Auth/Login/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SignUp from "./assets/Auth/SignUp/SignUp";
import HomeScreen from "./assets/HomeScreen/HomeScreen";
import ProductsItems from "./assets/ProductSection/ProductsItems";
import PdpSection from "./assets/PDP/PdpSection";
import MainCart from "./assets/Cart/MainCart";
import BookmarkPage from "./assets/Bookmark/BookmarkPage";
import ModifySection from "./assets/Modify/ModifySection";
import Request_Status from "./assets/Modify/Request_Status";
import CheckOutMain from "./assets/CheckOut/CheckOutMain";
import OrderPage from "./assets/Order/OrderPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Ecommerce-project/" Component={HomeScreen} />
          <Route exact path="/Ecommerce-project/Login" Component={Login} />
          <Route exact path="/Ecommerce-project/SignUp" Component={SignUp} />
          <Route
            exact
            path="/Ecommerce-project/Products"
            Component={ProductsItems}
          />
          <Route
            exact
            path="/Ecommerce-project/Products/Detail"
            Component={PdpSection}
          />
          <Route exact path="/Ecommerce-project/Cart" Component={MainCart} />
          <Route
            exact
            path="/Ecommerce-project/Bookmark"
            Component={BookmarkPage}
          />
          <Route
            exact
            path="/Ecommerce-project/Modify"
            Component={ModifySection}
          />
          <Route
            exact
            path="/Ecommerce-project/Modify/Status"
            Component={Request_Status}
          />
          <Route
            exact
            path="/Ecommerce-project/Cart/Checkout"
            Component={CheckOutMain}
          />
          <Route exact path="/Ecommerce-project/Order" Component={OrderPage} />
        </Routes>
        {/* <Login ></Login> */}
      </Router>
    </>
  );
}

export default App;
