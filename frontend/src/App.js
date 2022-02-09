import React, { Suspense } from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
// import Home from "./screens/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Product from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import Loader from "./components/Loader";
const Home = React.lazy(() => import("./screens/Home"));
const Header = React.lazy(() => import("./components/Header"));
const Footer = React.lazy(() => import("./components/Footer"));
const Product = React.lazy(() => import("./screens/ProductScreen"));
const OrderScreen = React.lazy(() => import("./screens/OrderScreen.js"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={Product} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" component={Home} exact />
          </Container>
        </main>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
