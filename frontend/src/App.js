import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Home from "./screens/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={Product} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
