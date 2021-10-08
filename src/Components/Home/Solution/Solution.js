import React from "react";
import "./Solution.css";

import CheckIcon from "@material-ui/icons/Check";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import GetAppIcon from "@material-ui/icons/GetApp";
import LaptopMacOutlinedIcon from "@material-ui/icons/LaptopMacOutlined";
import WebAssetOutlinedIcon from "@material-ui/icons/WebAssetOutlined";
import LibraryAddCheckOutlinedIcon from "@material-ui/icons/LibraryAddCheckOutlined";

function Solution() {
  return (
    <div className="solution">
      <h1>Explore Our Solution </h1>
      <div className="solution__heading">
        <h3>Industry </h3>
        <p>Technology Category</p>
      </div>
      <div className="solution__cards">
        <div className="solution__card">
          <div>
            <CheckIcon />
            <h3>Introducing NeyX</h3>
          </div>
          <p>
            One bot to solve all of thes It is going to revolutionize the online
            shopping experience and make it even more affordable and fun for the
            customers.
          </p>
        </div>
        <div className="solution__card">
          <div>
            <ChatOutlinedIcon />
            <h3>Bargain master</h3>
          </div>
          <p>
            A smart bot with strong negotiating will power, which is beneficial
            to buyer, seller and ecommerce site. This bargain helps to please
            the customer, that they are getting the best price and the buyer
            that they are getting more profit.
          </p>
        </div>
        <div className="solution__card">
          <div>
            <GetAppIcon />
            <h3>Ease in Installation</h3>
          </div>
          <p>
            Its installation is a piece of cake for any ecommerce to accommodate
            it as their perfect sales partner. It won’t increase any maintenance
            workload, that’s our responsibility.
          </p>
        </div>
        <div className="solution__card">
          <div>
            <LaptopMacOutlinedIcon />
            <h3>Out of harm’s way (replaces safe and fun)</h3>
          </div>
          <p>
            It respects the privacy of its customers and users by using the best
            security available in the market
          </p>
        </div>
        <div className="solution__card">
          <div>
            <WebAssetOutlinedIcon />
            <h3>New era of shopping</h3>
          </div>
          <p>
            It’s the future of online shopping, a new direction to the whole
            pricing system. Say goodbye to the old and boring fixed price tags.
          </p>
        </div>
        <div className="solution__card">
          <div>
            <LibraryAddCheckOutlinedIcon />
            <h3>Jollify Shopping</h3>
          </div>
          <p>
            It helps the customer to communicate their desired price to the
            buyer. Chit-Chat as much you would like to, in the direction to
            bargain for the best price.
          </p>
        </div>
      </div>
      <div>
        {/* <Link to={null} className="solution__seepricing-btn">
          <button>See Pricing</button>
        </Link> */}
      </div>
    </div>
  );
}

export default Solution;
