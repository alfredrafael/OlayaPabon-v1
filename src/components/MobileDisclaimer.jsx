import React from "react";

const MobileDisclaimer = () => {
  return (
    <>
      <p
        className="mobile-disclaimer"
        style={{ textAlign: "center", marginBottom: "2em", color: "red" }}
      >
        Use desktop. Este App no está optimizado para móbiles. This is an MVP
        version
      </p>
    </>
  );
};

export default MobileDisclaimer;
