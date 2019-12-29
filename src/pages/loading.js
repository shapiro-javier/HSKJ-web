import React from "react";
import "./loading.css";

export default function Loading() {
  return (
    <h1>
      Loading{" "}
      <span role="img" aria-label="Spinning emoji" className="spin">
        🌀
      </span>
    </h1>
  );
}
