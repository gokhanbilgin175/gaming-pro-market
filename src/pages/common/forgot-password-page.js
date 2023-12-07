import React from "react";
import ForgotPassword from "../../components/common/auth/forgot-password/forgot-password";
import Spacer from "../../components/common/spacer/spacer";
import AnoymousTemplate from "../../templates/anonymous-template";
import PageHeader from "../../components/anonymous/common/page-header/page-header";

const ForgotPasswordPage = () => {
  return (
    <AnoymousTemplate>
      <PageHeader title="Forgot Password" />
      <Spacer />
      <ForgotPassword />
      <Spacer />
    </AnoymousTemplate>
  );
};

export default ForgotPasswordPage;
