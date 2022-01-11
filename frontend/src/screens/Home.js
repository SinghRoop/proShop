import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

const Home = () => {
  return (
    <>
      <h1 className="text-center my-3">Latest Products</h1>
      <Row>
        {products.map((product, i) => (
          <Col key={i} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
