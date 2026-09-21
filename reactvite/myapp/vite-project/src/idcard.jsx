import React from "react";

function ICard({ roll, name, branch, college, image }) {
  return (
    <div
      style={{
        width: "280px",
        height: "500px",
        border: "5px solid red",
        backgroundColor: "#15161b",
        color: "white",
        textAlign: "center",
        padding: "15px",
        boxSizing: "border-box",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "145px",
          height: "145px",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />

      <h2>Roll: {roll}</h2>

      <h2>Name: {name}</h2>

      <h2>Branch: {branch}</h2>

      <h2>
        College: {college}
      </h2>
    </div>
  );
}

export default ICard;