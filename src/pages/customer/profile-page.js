import React from "react";
import Spacer from "../../components/common/spacer/spacer";
import Profile from "../../components/customer/profile/profile";
import CustomerTemplate from "../../templates/customer-template";

const ProfilePage = () => {
  return (
    <CustomerTemplate>
      <Spacer height={150}/>
      <Profile />
      <Spacer/>
    </CustomerTemplate>
  );
};

export default ProfilePage;
