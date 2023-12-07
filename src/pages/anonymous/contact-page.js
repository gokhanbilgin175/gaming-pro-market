import React from "react";
import PageHeader from "../../components/anonymous/common/page-header/page-header";
import Contact from "../../components/anonymous/contact/contact";
import Map from "../../components/anonymous/contact/map";
import AnoymousTemplate from "../../templates/anonymous-template";

const ContactPage = () => {
  return (
    <AnoymousTemplate>
      <PageHeader title="Contact" />
      <Contact />
      <Map />
    </AnoymousTemplate>
  );
};

export default ContactPage;
