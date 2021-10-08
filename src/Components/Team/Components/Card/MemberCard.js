import React from "react";

function MemberCard({ member }) {
  let removed = member.photo.slice(2, member.photo.length - 1);
  return (
    <div className="card">
      <div className="card__image">
        <img src={"data:image/jpeg;base64," + removed} alt={member.name} />
      </div>
      <div className="card__content">
        <h2>{member.name}</h2>
        <h3>
          {member.position.department}
        </h3>

        <div className="socialMedia">
          {
            <a href={`https://www.linkedin.com/in/${member.contact.linkedin}`} target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
          }
          {
            <a href={`https://www.facebook.com/${member.contact.facebook}`} target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
          }
          {
            <a href={`https://www.instagram.com/${member.contact.instagram}`} target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          }
          {
            <a href={`https://www.github.com/${member.contact.github}`} target="_blank">
              <i className="fab fa-github"></i>
            </a>
          }
        </div>
        <p>{member.summary}</p>
      </div>
    </div>
  );
}

export default MemberCard;
