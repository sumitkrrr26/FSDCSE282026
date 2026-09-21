import React from "react";
import ICard from "./idcard";

import rahulImg from "./images/chhotabheem.png";
import kirmadaImg from "./images/kirmada.webp";
import siddharthImg from "./images/siddharth.png";

function ICardGallery() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#15161b",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        padding: "40px 30px",
        gap: "30px",
      }}
    >
      <ICard
        roll="34365"
        name="Chhota Bheem"
        branch="CSE"
        college="ABES Engineering College"
        image={rahulImg}
      />

      <ICard
        roll="34366"
        name="Kirmada"
        branch="CSE"
        college="ABES Engineering College"
        image={kirmadaImg}
      />

      <ICard
        roll="34367"
        name="Siddharth Sharma"
        branch="CSE"
        college="ABES Engineering College"
        image={siddharthImg}
      />
    </div>
  );
}

export default ICardGallery;