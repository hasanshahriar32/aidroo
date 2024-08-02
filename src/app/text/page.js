import React from "react";

export default async function Text() {
  try {
    const res = await fetch("http://localhost:3000/api/auth");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
  return <div>Text</div>;
}
