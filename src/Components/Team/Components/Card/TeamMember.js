import React, { useEffect, useState } from "react";
import "./AniCard.css";
import Card from "./Card";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Box from "@mui/material/Box/Box";

function TeamMember() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // document.body.style.overflow = !members.length ? "hidden" : "";
    const url = "http://neyx-server.herokuapp.com/team";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMembers(data.team);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(members);

  return !members.length ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: "0",
        background: "#fff",
        zIndex: "1",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <div className="card__container">
      {members.map((member) => (
        <Card member={member} key={member.id} />
      ))}
    </div>
  );
}

export default TeamMember;
