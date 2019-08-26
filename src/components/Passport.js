import React from "react";

export default function Passport({ passport }) {
  console.log(passport);
  return (
    <div>
      <h3>{passport.city}</h3>
      <p>{passport.country}</p>
    </div>
  );
}
