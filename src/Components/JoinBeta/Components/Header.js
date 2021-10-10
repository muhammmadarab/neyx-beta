import { Button } from "@material-ui/core";
import { React, useState } from "react";
import { Header, HeaderContent, FormContainer } from "./Header.style";
import Form from "./Form";

function HeaderCompo() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <Header>
      <HeaderContent>
        <h1>Success starts with a great product</h1>
        <p>
          Join the beta programme right now. It's exciting! Its free! Give us
          your valuable feedback and get the best features beforehand. This is
          what your customers have been waiting for.
        </p>

        <Button onClick={() => setButtonPopup(true)}>Sign me Up</Button>
        <FormContainer id="signUpForm">
          <Form trigger={buttonPopup} setTrigger={setButtonPopup} />
        </FormContainer>
      </HeaderContent>
    </Header>
  );
}

export default HeaderCompo;
