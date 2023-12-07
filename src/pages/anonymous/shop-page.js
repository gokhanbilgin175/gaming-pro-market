import React from "react";
import PageHeader from "../../components/anonymous/common/page-header/page-header";
import Menu from "../../components/anonymous/shop/menu";
import AnoymousTemplate from "../../templates/anonymous-template";

const ShopPage = () => {
  return (
    <AnoymousTemplate>
      <PageHeader title="Shop" />
      <Menu />
    </AnoymousTemplate>
  );
};

export default ShopPage;
