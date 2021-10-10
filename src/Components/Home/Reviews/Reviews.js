import React from "react";
import "./Reviews.css";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";

function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews__image">
        <h1>See, what our partners are saying about us already</h1>
        <h2>Throughout the Country</h2>
      </div>
      <div className="reviews__cards">
        <div className="reviews__card">
          <div className="review_title">
            <CheckCircleOutlinedIcon />
            <h2>Winner of the online shopping game</h2>
          </div>
          <p>
            “Bargaining in online shopping! This is the best thing i heard.״
          </p>
          <div className="card__footer">
            <h3>Aditya Sinha</h3>
            {/* <p>Milestone</p> */}
          </div>
        </div>
        <div className="reviews__card">
          <div className="review_title">
            <CheckCircleOutlinedIcon />
            <h2>New, exciting and awesome</h2>
          </div>
          <p>
            “My customers are very excited to know that they can bargain in
            online platform now!״
          </p>
          <div className="card__footer">
            <h3>Muhammad Arab</h3>
            {/* <p>Milestone</p> */}
          </div>
        </div>
        <div className="reviews__card">
          <div className="review_title">
            <CheckCircleOutlinedIcon />
            <h2>Customer oriented, professional and fun</h2>
          </div>
          <p>
            “I am sure this is going to be huge. This is ninja technique for
            getting new and happy customers.״{" "}
          </p>
          <div className="card__footer">
            <h3>Meenakshi Roy</h3>
            {/* <p>Milestone</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
