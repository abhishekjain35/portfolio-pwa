import React from "react";

const Fallback = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
      }}
    >
      <h1
        style={{
          color: "#08fdd8",
          margin: "auto",
        }}
      >
        Loading...
      </h1>
    </div>
  );
};

export default Fallback;
