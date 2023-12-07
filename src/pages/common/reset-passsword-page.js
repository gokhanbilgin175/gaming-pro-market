import React from "react";
import PageHeader from "../../components/anonymous/common/page-header/page-header";
import ResetPassword from "../../components/common/auth/reset-password/reset-password";
import Spacer from "../../components/common/spacer/spacer";
import AnoymousTemplate from "../../templates/anonymous-template";

const ResetPasswordPage = () => {
  return (
    <AnoymousTemplate>
      <PageHeader title="Reset Password" />
      <Spacer />
      <ResetPassword />
      <Spacer />
    </AnoymousTemplate>
  );
};

export default ResetPasswordPage;
