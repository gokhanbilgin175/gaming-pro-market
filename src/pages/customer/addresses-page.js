import React from "react";
import Spacer from "../../components/common/spacer/spacer";
import NewAddress from "../../components/customer/addresses/new-address";
import SavedAddresses from "../../components/customer/addresses/saved-addresses";
import CustomerTemplate from "../../templates/customer-template";

const AddressesPage = () => {
  return (
    <CustomerTemplate>
      <Spacer />
      <NewAddress />
      <SavedAddresses />
      <SavedAddresses />
      <Spacer />
    </CustomerTemplate>
  );
};

export default AddressesPage;
