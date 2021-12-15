import React from "react";

export default function User({details}) {
  return (
    <div>
      <h2>User #{details.id}</h2>
      <div>{JSON.stringify(details)}</div>
    </div>
  )
}