import React from "react";
import Input from "./Input";
import Logo from "../../../img/logo.svg";
import {
  Container,
  Form,
  SubContainer,
  Button,
  LogoContainer,
} from "./Form.style";

function FormCompo(props) {
  if (document.getElementById("signUpForm") != null) {
    const FormContainer = document.getElementById("signUpForm");
    FormContainer.style.display = props.trigger ? "flex" : "none";
  }
  return props.trigger ? (
    <Container>
      <SubContainer>
        <LogoContainer>
          <img src={Logo} alt="" />
          <h1>Join the Beta</h1>
        </LogoContainer>
        <Form>
          <Input name="name" label="Name" type="text" />
          <Input name="url" label="Company URL" type="text" />
          <Input name="email" label="Email Address" type="email" />
          <Input name="number" label="Number" type="number" />
          <Button className="betaSignUpBtn">Join Beta</Button>
          <Button
            className="betaSignUpBtn betaSignUpBtn--close"
            onClick={() => props.setTrigger(false)}
          >
            Close
          </Button>
        </Form>
      </SubContainer>
      <SubContainer>
        <div>
          <h2>Join the e-commerce revolution</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vitae
            cumque et nobis pariatur at esse beatae quisquam, aspernatur commodi
          </p>
        </div>
      </SubContainer>
    </Container>
  ) : (
    ""
  );
}

export default FormCompo;
