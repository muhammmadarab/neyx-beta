import React from "react";
import AboutFeature from "./AboutFeature";

function Features() {
  return (
    <div>
      <AboutFeature
        title="NOD &amp; WAVE"
        heading="You need attention! What are you waiting for?"
        desc="We have a solution for you, which will amaze the customer and will give the feel of warmth to the shopper."
        footer="Your attention is our goal to increase and provide a better analysis of sales."
        img="https://www.shift4shop.com/2015/images/shopping-cart-software/why-shopping-cart.png"
        alt="shopping cart"
      />
      <AboutFeature
        title="NEGOTIATE YOUR PRICE"
        heading="NeyX is the world’s first smart negotiation chatbot with a variety of features just for eCommerce."
        desc="Buy a product, without a bargain…. Not Anymore! We are offering the best discount on the basis of capability of the customer and taking it to a whole new level which brings in profit for everyone. We are here for you, by you."
        img="https://getbargainator.com/img/features/BG-FP-IMG4.png"
        alt="girl using phone"
      />
      <AboutFeature
        title="CONVERSION CAPACITY"
        heading={[
          `This NeyX bot has successfully managed to reach perfect`,
          <span>conversion level up to ______</span>,
          `on various other ecommerce stores.`,
        ]}
        img="https://previews.123rf.com/images/yupiramos/yupiramos1903/yupiramos190318552/124265895-webpage-template-with-ecommerce-icons-vector-illustration-design.jpg"
        alt="shopping website"
        hOneClass="black"
      />

      <AboutFeature
        title="DON’T STEP BACK!"
        heading="We don’t believe in stopping setbacks, we get ready for a comeback."
        desc="As time just moves forward, we keep moving forward using gradient descent which will optimize the sales at every neyx step providing the best price."
        img="https://getbargainator.com/img/features/BARGAINATOR-MADE-DEAL.png"
        alt="product page"
      />
    </div>
  );
}

export default Features;
