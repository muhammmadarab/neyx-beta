import React from "react";

function Card({ member }) {
  let removed = member.photo.slice(2, member.photo.length - 1);
  return (
    <>
      <input
        type="checkbox"
        name="cardTrigger"
        id={`cardTrigger` + member.id}
        className="ct"
      />
      <label htmlFor={`cardTrigger` + member.id}>
        <div className="card">
          <div className="card-layer card-layer--front">
            <div className="profile-image">
              <img
                src={"data:image/jpeg;base64," + removed}
                alt={member.name}
              />
            </div>
            <div className="details">
              <h2 className="name">{member.name}</h2>
              <h3 className="position">{member.position.department}</h3>

              <div className="socialMedia">
                <a
                  href={`https://www.linkedin.com/in/${member.contact.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href={`https://www.facebook.com/${member.contact.facebook}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href={`https://www.instagram.com/${member.contact.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href={`https://www.github.com/${member.contact.github}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="card-layer card-layer--back">
            <p className="summary">{member.summary}</p>
          </div>
        </div>
      </label>
    </>
  );
}

export default Card;
