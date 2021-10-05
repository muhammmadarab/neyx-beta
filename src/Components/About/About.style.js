import styled from "styled-components";

const media = {
  tablet: "@media(min-width:768px)",
  mobile: "@media (max-width: 420px)",
  smallMobile: "@media (max-width: 340px)",
};

export const AboutContainer = styled.div`
  font-family: "Raleway", sans-serif;
`;

export const Feature = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  padding: 0.5em;
  margin: 1em auto;

  &.tools {
    padding: 1em 0.5em 1.5em;
    flex-direction: row !important;
    height: max-content;
    max-width: unset;
    width: 100vw;
    background-color: #292f45;

    h1 {
      font-size: 2.5em;

      ${media.mobile} {
        font-size: 2em;
      }
    }

    h4 {
      color: #fff;
      font-weight: 600;
    }
  }

  ${media.tablet} {
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;

export const FeatureDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  width: 100%;
  letter-spacing: 1px;

  ${media.tablet} {
    padding: 0.5em 2em;
    width: 50%;
  }

  h2 {
    color: #292f45;
    font-size: xx-large;
    font-weight: 300;
    text-transform: uppercase;

    ${media.smallMobile} {
      font-size: x-large;
      font-weight: 600;
    }
  }

  h1 {
    padding: 1em 0;
    color: #ea2329;
    font-size: x-large;

    &.black {
      color: #000;
    }

    span {
      color: #ea2329;
    }
  }

  h4 {
    color: #252e25;
    font-weight: normal;
    line-height: 1.5em;
  }

  p {
    padding: 1em 0;
    color: #252e25;
    font-weight: 600;
  }
`;

export const FeatureImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${media.tablet} {
    width: 50%;
  }

  img {
    max-width: 100%;
    height: 20em;
  }
`;

export const Leads = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  padding: 1em;
  margin: auto;

  ${media.tablet} {
    margin-top: -65px;
  }

  h2 {
    color: #ea2329;
    font-size: x-large;
    text-transform: uppercase;
    margin-bottom: 1em;

    ${media.tablet} {
      font-size: xx-large;
    }
  }

  h1 {
    margin-bottom: 1em;
    color: #292f45;
    font-size: x-large;

    ${media.tablet} {
      font-size: xx-large;
    }
  }

  p {
    color: #252e25;
    margin-bottom: 1em;
    font-size: large;
  }

  div {
    display: flex;
    max-width: 768px;
    margin: auto;

    img {
      max-width: 100%;
    }
  }
`;

export const AboutFooter = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  padding: 1em;
  width: 100vw;
  background-color: #eaeef9;

  ${media.smallMobile} {
    height: 60vh;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    max-width: 920px;
    margin: auto;

    h1 {
      color: #292f45;
      font-size: x-large;
      text-transform: uppercase;
      letter-spacing: 1px;

      ${media.tablet} {
        font-size: 2em;
      }
    }

    h5 {
      color: #292f45;
      font-size: medium;

      ${media.tablet} {
        font-size: large;
      }
    }

    a {
      width: 25em;
      background-color: orangered;
      color: #fff;
      padding: 0.5em;
      border-radius: 0.5em;
      font-weight: 600;
      letter-spacing: 1px;
      text-align: center;

      ${media.mobile} {
        width: 18em;
      }

      ${media.smallMobile} {
        width: 15em;
      }

      :hover {
        background-color: orangered;
        transform: scale(1.1);
      }

      :active {
        transform: scale(0.9);
      }
    }
  }
`;
