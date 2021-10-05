import { Button } from "@material-ui/core";
import { React, useState } from "react";
import {
  Header,
  HeaderContent,
  FormContainer,
} from "./Header.style";
import Form from "./Form";

function HeaderCompo() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <Header>
      <HeaderContent>
        <h1>Success starts with a great product</h1>
        <p>
          Morbi leo tortor, fermentum sed orci vitae, tempor auctor turpis.
          Fusce bibendum accumsan fringilla. Nulla aliquam luctus sem, at
          posuere nibh lobortis et.
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
