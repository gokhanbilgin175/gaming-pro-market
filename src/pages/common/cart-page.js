import React from "react";
import Footer from "../../components/anonymous/common/footer/footer";
import Header from "../../components/anonymous/common/header/header";
import PageHeader from "../../components/anonymous/common/page-header/page-header";
import Cart from "../../components/customer/cart/cart";

const CartPage = () => {
  return (
    <>
      <Header />
      <PageHeader title="Cart" />
      <Cart />
      <Footer />
    </>
  );
};

export default CartPage;
