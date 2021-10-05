import React, { useEffect, useState } from "react";
import "./Card.css";
import Card from "./MemberCard";

function TeamMember() {
  const [members, setMembers] = useState([]);

  async function fetchData() {
    const url = "https://neyx-server.herokuapp.com/team";

    console.log("Fetching...");

    let response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      let json = await response.json();
      let team = json["team"];
      let photo = team[0]["photo"];
      let FirstRemoved = photo.slice(1);
      let SecondRemoved = FirstRemoved.slice(1);
      let LastRemoved = SecondRemoved.slice(0, SecondRemoved.length - 1);
      // let binary = atob(LastRemoved);
      var img = document.createElement("img");
      img.src = "data:image/jpeg;base64," + LastRemoved;
      document.body.appendChild(img);
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }

  useEffect(() => {
    fetch("http://neyx-server.herokuapp.com/team")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data.team);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(members);

  return (
    <div className="card__container">
      {members.map((member) => (
        <Card member={member} />
      ))}
    </div>
  );
}

export default TeamMember;
