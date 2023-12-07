import React from "react";
import PageHeader from "../../components/anonymous/common/page-header/page-header";
import RegisterForm from "../../components/anonymous/login-register/register-form";
import AnoymousTemplate from "../../templates/anonymous-template";

const RegisterPage = () => {
  return (
    <AnoymousTemplate>
      <PageHeader title="Register" />
      <RegisterForm />
    </AnoymousTemplate>
  );
};

export default RegisterPage;
