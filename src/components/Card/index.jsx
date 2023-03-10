import React from "react";

function Card({textura, color, largo} ) {
  return (
    <div className="card">
      <h2>Tipo de cabello:</h2>
      <p>Textura: {textura}</p>
      <p>Color: {color}</p>
      <p>Largo: {largo}</p>
    </div>
  );
}

export default Card;