import styled from "styled-components";
const media = {
  desktop: "@media(min-width: 530px)",
};

export const Input = styled.input`
  display: block;
  padding: 0.3em 1em;
  border: 2px solid #5f5f5f;
  border-radius: 3px;
  margin: 0.3em auto 0.7em;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 1em;
  font-family: "Times New Roman", Times, serif;

  ${media.desktop} {
    width: 15em;
  }

  :focus {
    outline: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  [type="number"] {
    -moz-appearance: textfield;
  }
`;

export const Label = styled.label`
  color: #5f5f5f;
  font-size: 1.1em;
  font-weight: bolder;
`;
