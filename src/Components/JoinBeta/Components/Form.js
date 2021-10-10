import React, { useState, useRef } from "react";
import Input from "./Input";
import Logo from "../../../img/logo.svg";
import {
  Container,
  Form,
  SubContainer,
  Button,
  LogoContainer,
} from "./Form.style";
import { DialogStyled } from "../../Contact/Contact.style";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function FormCompo(props) {
  const [open, setOpen] = useState(false);
  const BetaForm = useRef(null);

  if (document.getElementById("signUpForm") != null) {
    const FormContainer = document.getElementById("signUpForm");
    FormContainer.style.display = props.trigger ? "flex" : "none";
  }

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach((input) => {
      input.value = "";
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(BetaForm.current);

    fetch("https:/neyx-server.herokuapp.com/beta", {
      method: "POST",
      body: data,
    }).then((res) => res.json());

    props.setTrigger(false);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      handleReset();
    }, 5000);
  };

  return props.trigger ? (
    <Container>
      <SubContainer>
        <LogoContainer>
          <img src={Logo} alt="" />
          <h1>Join the Beta</h1>
        </LogoContainer>
        <Form onSubmit={handleSubmit} ref={BetaForm}>
          <Input
            name="FullName"
            label="Full Name"
            type="text"
            placeholder="concerned person name"
          />
          <Input
            name="CompanyName"
            label="Company Name"
            type="text"
            placeholder="enter company name"
          />
          <Input
            name="CompanyWebsite"
            label="Company Website"
            type="text"
            placeholder="enter company url"
          />
          <Input
            name="WorkEmail"
            label="Work Email"
            type="email"
            placeholder="example@domain.com"
          />
          <Input
            name="ContactNumber"
            label="Contact Number"
            type="number"
            placeholder="+91-00000 00000"
          />
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
            Join the beta now to get the best features beforehand. Bargaining in
            online shopping, this is what your customer have been waiting for.
            Increase your sale numbers and profits. Every e-commerce is moving
            towards adding neyx and don't fall behind. Customer satisfaction is
            the top priority
          </p>
          <h3>Already 50+ companies have joined us and still counting</h3>
        </div>
      </SubContainer>
    </Container>
  ) : (
    <Dialog fullScreen={false} open={open}>
      <DialogStyled>
        <DialogTitle>
          <CheckCircleOutlineIcon /> Success
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Welcome on board with us</DialogContentText>
        </DialogContent>
      </DialogStyled>
    </Dialog>
  );
}

export default FormCompo;
