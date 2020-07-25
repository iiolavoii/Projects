import React from "react";
import CardViewContent from "../CardView/CardViewContent";

export default function CardView({ data }) {
  return (
    <ul>
      {data.map((task) => (
        <CardViewContent data={task} />
      ))}
    </ul>
  );
}
