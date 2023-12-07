import React from "react";
import NotFound from "../../components/common/not-found/not-found";
import Spacer from "../../components/common/spacer/spacer";
import AnoymousTemplate from "../../templates/anonymous-template";

const NotFoundPage = () => {
  return (
    <AnoymousTemplate>
      <Spacer />
      <NotFound />
    </AnoymousTemplate>
  );
};

export default NotFoundPage;
