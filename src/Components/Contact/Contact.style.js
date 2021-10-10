import styled from "styled-components";
import contactUs from "../../img/contactUs.jpg";

const media = {
  tablet: "@media(min-width:920px)",
  tabletSmall: "@media(min-width:768px)",
  mobile: "@media(max-width:400px)",
};

export const DialogStyled = styled.div`
  z-index: 100000;
  .MuiDialogTitle-root {
    display: flex;
    align-items: center;
    font-weight: 600;
    color: green;
    font-size: 1.4em;
    padding: 0.5em;

    .MuiSvgIcon-root {
      font-size: 1.3em;
      margin-right: 0.3em;
    }
  }

  .MuiTypography-root {
    font-weight: 600;
  }
`;

export const Container = styled.div`
  padding: 0 0 5em 0;

  > div {
    display: flex;
    flex-wrap: wrap;
    max-width: 1150px;
    width: 80vw;
    margin: -5% auto 0;
    border-radius: 1em;
    box-shadow: rgba(0, 0, 0, 0.2) 0 0 1em;
    background-color: #fff;

    ${media.tablet} {
      flex-wrap: nowrap;
      height: 70vh;
    }
    ${media.mobile} {
      width: 100%;
    }
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1em 2em;
  width: 100%;
  margin: 0.5em;
  border-radius: 0.7em;
  color: #efefef;
  background: url(${contactUs});

  ${media.mobile} {
    padding: 1em;
  }

  ${media.tablet} {
    width: 40%;
  }

  h2 {
    color: #fff;
    letter-spacing: 1px;

    ${media.mobile} {
      font-size: 1.2em;
    }
  }

  p {
    margin-top: 1.2em;

    ${media.mobile} {
      font-size: 0.8em;
    }
  }
`;

export const ContactLink = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 1em 0;
  font-weight: bold;

  span:first-child {
    color: #ea2329;
    margin-right: 0.5em;
  }
`;

export const SocialLink = styled.a`
  height: 2em;
  width: 2em;
  display: inline-block;
  border-radius: 50%;
  margin-right: 0.5em;
  color: #fff;
  text-align: center;
  cursor: pointer;
  transform: scale(1.1);

  :hover {
    background-color: #ea2329;
  }

  i {
    margin: auto;
    line-height: 2em;
  }
`;

export const ContainerRight = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1em;
    width: 100%;
    height: 100%;

    ${media.tablet} {
      padding: 1em 2em;
    }

    > div:first-child {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    > div:nth-child(2) {
      > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        > div {
          flex-direction: row;
          align-items: center;

          > label {
            margin-left: 1em;
          }
        }
      }
    }
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  margin: 0.5em 0.6em 1em;

  &#textbox {
    width: 100%;
    margin: 0 0 0.5em;
  }

  ${media.tabletSmall} {
    width: 45%;
  }

  ${media.mobile} {
    margin: 0.7em 0;
  }
`;

export const Label = styled.label`
  padding: 0.2em 0;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const Input = styled.input`
  padding: 0.2em;
  border: 0;
  border-bottom: 2px solid darkgray;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 1px;

  &:focus {
    border-bottom-color: #ea2329;
    outline: transparent;

    + label {
      color: #ea2329;
    }

    ::placeholder {
      opacity: 0.5;
      transition: all 0.1s ease;
    }
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  padding: 0.5em;
  margin: 0.5em 0;
  border: 2px solid darkgray;
  border-radius: 0.8em;

  &:focus {
    border-color: #ea2329;
    outline: transparent;

    + label {
      color: #ea2329;
    }

    ::placeholder {
      opacity: 0.7;
      transition: all 0.1s ease;
    }
  }
`;

export const Button = styled.button`
  height: 3em;
  width: 12em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.7em;
  background-color: #ea2329;
  color: #fff;
  font-weight: bold;
  float: right;
`;
