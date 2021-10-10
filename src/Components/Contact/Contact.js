import React, { useState, useRef } from "react";
import {
  Container,
  ContainerLeft,
  ContainerRight,
  Label,
  Button,
  DialogStyled,
} from "./Contact.style";
import ContactLink from "./Components/ContactLink";
import SocialLink from "./Components/SocialLink";
import Input from "./Components/Input";
import Textarea from "./Components/Textarea";
import Title from "../General/TitleHeader/Title";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function Contact() {
  const [open, setOpen] = useState(false);
  const ContactForm = useRef(null);

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach((input) => {
      input.value = "";
      input.checked = "";
    });
    document.querySelector("textarea").value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(ContactForm.current);

    fetch("https:/neyx-server.herokuapp.com/contact", {
      method: "POST",
      body: data,
    }).then((res) => res.json());

    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      handleReset();
    }, 5000);
  };
  return (
    <>
      <Dialog fullScreen={false} open={open}>
        <DialogStyled>
          <DialogTitle>
            <CheckCircleOutlineIcon /> Success
          </DialogTitle>
          <DialogContent>
            <DialogContentText>We will get to you soon</DialogContentText>
          </DialogContent>
        </DialogStyled>
      </Dialog>
      <Title title="Contact Us" />
      <Container>
        <div>
          <ContainerLeft>
            <div>
              <h2>Contact Information</h2>
              <p>
                Fill up the form and our team will get back to you within 24
                hours
              </p>
            </div>
            <div>
              <ContactLink icon="fa fa-phone" content="+91 98765 4321" />
              <ContactLink icon="fa fa-envelope" content="info@neyx.in" />
              <ContactLink icon="fa fa-map-marker" content="Kolkatta, WB, IN" />
            </div>
            <div>
              <SocialLink
                icon="fab fa-facebook-f"
                redirect="https://www.facebook.com/"
              />
              <SocialLink
                icon="fab fa-twitter"
                redirect="https://www.twitter.com/"
              />
              <SocialLink
                icon="fab fa-instagram"
                redirect="https://www.instagram.com/"
              />
              <SocialLink
                icon="fab fa-linkedin-in"
                redirect="https://www.linkedin.com/"
              />
            </div>
          </ContainerLeft>
          <ContainerRight>
            <form id="from" ref={ContactForm} onSubmit={handleSubmit}>
              <div>
                <Input
                  label="First Name"
                  placeholder="Muhammad"
                  type="text"
                  name="Firstname"
                />
                <Input
                  label="Last Name"
                  placeholder="Arab"
                  type="text"
                  name="Lastname"
                />
                <Input
                  label="Email"
                  placeholder="hello@example.com"
                  type="email"
                  name="Email"
                />
                <Input
                  label="Phone"
                  placeholder="+91 98765 43210"
                  type="number"
                  name="Phone"
                />
              </div>
              <div>
                <Label>Subject</Label>
                <div>
                  <Input
                    label="Product Enquiry"
                    type="radio"
                    name="Subject"
                    value="Product Enquiry"
                    for="ProductEnquiry"
                  />
                  <Input
                    label="Business Enquiry"
                    type="radio"
                    name="Subject"
                    value="Business Enquiry"
                    for="BusinessEnquiry"
                  />
                  <Input
                    label="Saying Hi"
                    type="radio"
                    name="Subject"
                    value="Saying Hi"
                    for="SayingHi"
                  />
                  <Input
                    label="Other"
                    type="radio"
                    name="Subject"
                    value="Other"
                    for="Other"
                  />
                </div>
              </div>
              <Textarea
                label="Message"
                placeholder="Type your message here..."
                rows="4"
                name="Message"
              />
              <div>
                <Button>Send Message</Button>
              </div>
            </form>
          </ContainerRight>
        </div>
      </Container>
    </>
  );
}

export default Contact;
