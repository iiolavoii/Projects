import React from "react";
import CardViewContent from "../CardView/CardViewContent";

export default function CardView({ data }) {
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {data.map((task) => (
        <CardViewContent data={task} />
      ))}
    </ul>
  );
}
