import React from "react";

function MemberCard({ member }) {
  return (
    <div className="card">
      <div className="card__image">
        <img
          // src={member.photo}
          alt={member.name}
        />
      </div>
      <div className="card__content">
        <h2>{member.name}</h2>
        <h3>{member.position.department}</h3>
        <p>{member.summary}</p>
        <div className="socialMedia">
          {member.contact.facebook != null && (
            <a href={member.contact.facebook}>
              <i className="fab fa-facebook-f"></i>
            </a>
          )}
          {member.contact.instagram != null && (
            <a href={member.contact.instagram}>
              <i className="fab fa-instagram"></i>
            </a>
          )}
          {member.contact.github != null && (
            <a href={member.contact.github}>
              <i className="fab fa-github"></i>
            </a>
          )}
          {member.contact.linkedin != null && (
            <a href={member.contact.linkedin}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
          {member.contact.link != null && (
            <a href={member.contact.link}>
              <i className="fa fa-link"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
