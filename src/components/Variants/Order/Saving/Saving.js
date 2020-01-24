import React from "react";
import ContactForm from "./ContactForm";

class ContactPage extends React.Component {
  submit = values => {
    console.log(values);
  };
  render() {
    return <ContactForm onSubmit={this.submit} />;
  }
}

export default ContactPage;
