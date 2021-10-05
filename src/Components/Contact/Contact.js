import React from "react";
import {
  Container,
  ContainerLeft,
  ContainerRight,
  Label,
  Button,
} from "./Contact.style";
import ContactLink from "./Components/ContactLink";
import SocialLink from "./Components/SocialLink";
import Input from "./Components/Input";
import Textarea from "./Components/Textarea";
import Title from "../General/TitleHeader/Title";

function Contact() {
  return (
    <>
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
            <div>
              <Input label="First Name" placeholder="Muhammad" type="text" />
              <Input label="Last Name" placeholder="Arab" type="text" />
              <Input
                label="Email"
                placeholder="hello@example.com"
                type="email"
              />
              <Input
                label="Phone"
                placeholder="+91 98765 43210"
                type="number"
              />
            </div>
            <div>
              <Label>Subject</Label>
              <div>
                <Input
                  label="Subject One"
                  type="radio"
                  name="subject"
                  value="Option"
                  for="Option1"
                />
                <Input
                  label="Subject Two"
                  type="radio"
                  name="subject"
                  value="Option"
                  for="Option2"
                />
                <Input
                  label="Subject Three"
                  type="radio"
                  name="subject"
                  value="Option"
                  for="Option3"
                />
                <Input
                  label="Subject Four"
                  type="radio"
                  name="subject"
                  value="Option"
                  for="Option4"
                />
              </div>
            </div>
            <Textarea
              label="Message"
              placeholder="Type your message here..."
              rows="4"
            />
            <div>
              <Button>Send Message</Button>
            </div>
          </ContainerRight>
        </div>
      </Container>
    </>
  );
}

export default Contact;
