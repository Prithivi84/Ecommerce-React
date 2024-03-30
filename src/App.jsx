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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={HomeScreen} />
          <Route exact path="/Login" Component={Login} />
          <Route exact path="/SignUp" Component={SignUp} />
          <Route exact path="/Products" Component={ProductsItems} />
          <Route exact path="/Products/Detail" Component={PdpSection} />
          <Route exact path="/Cart" Component={MainCart} />
          <Route exact path="/Bookmark" Component={BookmarkPage} />
        </Routes>
        {/* <Login ></Login> */}
      </Router>
    </>
  );
}

export default App;
