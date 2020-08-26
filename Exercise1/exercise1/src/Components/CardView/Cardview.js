import React from "react";
import CardViewContent from "../CardView/CardViewContent";

export default function CardView({ data }) {
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data.map((task) => (
        <CardViewContent data={task} />
      ))}
    </ul>
  );
}
