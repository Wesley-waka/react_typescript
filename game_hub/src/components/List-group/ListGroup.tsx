import { useState } from "react";
import "./ListGroup.css";

function ListGroup() {
  const items = ["New york", "Nairobi", "Meru", "Machakos"];
  return (
    <>
      <h1>List </h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
