import React from "react";
import Footer from "../components/anonymous/common/footer/footer";
import Header from "../components/anonymous/common/header/header";
import CartAll from "../components/customer/cart/cart-all";

const AnoymousTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <CartAll />
      {children}
      <Footer />
    </>
  );
};

export default AnoymousTemplate;
