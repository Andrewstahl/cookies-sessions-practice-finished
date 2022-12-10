import React from "react";

export default function Error({ error }) {

  return (
    <div className="error-container">
      <span className="error-alert">!</span>
      <p className="error-message">{error}</p>
    </div>
  )
}