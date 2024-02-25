import React from "react";

export default function Post({ name, description, likes }) {
  return (
    <section style={{ border: "3px solid red", marginBottom: '12px' }}>
      <h3>{name}</h3>
      <h4>{description}</h4>
      <p>Rating: {likes}</p>
    </section>
  );
}
