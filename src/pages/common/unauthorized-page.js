import React from "react";
import Spacer from "../../components/common/spacer/spacer";
import Unauthorized from "../../components/common/unauthorized/unauthorized";
import AnoymousTemplate from "../../templates/anonymous-template";

const UnauthorizedPage = () => {
  return (
    <AnoymousTemplate>
      <Spacer />
      <Unauthorized />
    </AnoymousTemplate>
  );
};

export default UnauthorizedPage;
