import React from "react";
import PageHeader from "../../components/anonymous/common/page-header/page-header";
import LoginForm from "../../components/anonymous/login-register/login-form";
import AnoymousTemplate from "../../templates/anonymous-template";

const LoginPage = () => {
  return (
    <AnoymousTemplate>
      <PageHeader title="Login" />
      <LoginForm />
    </AnoymousTemplate>
  );
};

export default LoginPage;
