import React from "react";
import CustomerTemplate from "../../templates/customer-template";
import Favourites from "../../components/customer/favourites/favourites";
import Spacer from "../../components/common/spacer/spacer";

const FavouritesPage = () => {
  return (
    <CustomerTemplate>
      <Spacer/>
      <Favourites />
      <Spacer/>
    </CustomerTemplate>
  );
};

export default FavouritesPage;
