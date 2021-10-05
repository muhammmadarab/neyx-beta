import React from "react";
import AboutFeature from "./AboutFeature";

function Features() {
  return (
    <div>
      <AboutFeature
        title="Greetings &amp; Announcements"
        heading="Who said shopping online had to be lonely?"
        desc={[
          `Making customers feel welcome as soon as they arrive at your store
            is a great way to start their experience. Bargainator will greet
            every customer onto your site just as they would in store!`,
          <br />,
          `Once you have shoppers attention, make sure they know of any ongoing
            promotions, keep them in the loop with the latest brand news, or
            invite them to read your blog.`,
        ]}
        footer="Engaging with customers early on their arrival will help reduce
            bounce rates and increase life-time value."
        img="https://www.shift4shop.com/2015/images/shopping-cart-software/why-shopping-cart.png"
        alt="shopping cart"
      />
      <AboutFeature
        title="Bargain for discount"
        heading="Bargainator is the world's first negotiation chatbot made for eCommerce."
        desc={`This unique feature brings offering discounts to a whole new level of engagement. Instead of offering discounts for no reason let your customers "work" for them. Bargainator is the world's first negotiation chatbot made for eCommerce`}
        img="https://getbargainator.com/img/features/BG-FP-IMG4.png"
        alt="girl using phone"
      />
      <AboutFeature
        title="Convert"
        heading={[
          "Once Bargainator engage with your shopper in a negotiation chat, he has reached an amazing ",
          <span>conversion level of up to 8.75% </span>,
          "on customers stores just like yours.",
        ]}
        img="https://previews.123rf.com/images/yupiramos/yupiramos1903/yupiramos190318552/124265895-webpage-template-with-ecommerce-icons-vector-illustration-design.jpg"
        alt="shopping website"
        hOneClass="black"
      />
      <AboutFeature
        title="Not? Retargated"
        heading="From the moment a visitor arrives at your store, Bargainator only goal is to make sales for you..."
        desc="and he never quits! if he doesn't succeed the first-time around, Bargainator will retarget shoppers using an automated sequence to convert lost sales."
        img="https://getbargainator.com/img/features/BARGAINATOR-MADE-DEAL.png"
        alt="product page"
      />
    </div>
  );
}

export default Features;
