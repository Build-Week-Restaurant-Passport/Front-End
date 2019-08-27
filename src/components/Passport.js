import React from "react";

export default function Passport({ passport }) {
  console.log(passport);
  return (
    <div>
      <h3>{passport.name}</h3>
      <p>{passport.country_name}</p>
    </div>
  );
}
