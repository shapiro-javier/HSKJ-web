import React from "react";
import "./loading.css";

export default function Loading() {
  return (
    <h1 className="text">
      Loading{" "}
      <span role="img" aria-label="Spinning emoji" className="spin">
        🌀
      </span>
    </h1>
  );
}
