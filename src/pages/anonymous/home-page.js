import React from "react";
import Header from "../../components/anonymous/common/header/header";
import BrandsSlider from "../../components/anonymous/home/brands-slider";
import HomeSearchbar from "../../components/anonymous/home/home-searchbar";
import FeaturedProducts from "../../components/anonymous/products/featured-products/featured-products";
import NewProducts from "../../components/anonymous/products/new-products/new-products";
import AnoymousTemplate from "../../templates/anonymous-template";

const HomePage = () => {
  return (
    <AnoymousTemplate>
      <Header />
      <HomeSearchbar />
      <FeaturedProducts />
      <BrandsSlider />
      <NewProducts />
    </AnoymousTemplate>
  );
};

export default HomePage;
