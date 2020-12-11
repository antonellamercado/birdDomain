import React from "react";
import './ErrorNotice.css'

export default function ErrorNotice(props) {
  return (
    <div className="error-msg mr-3 ml-3">
      <span>{props.message}</span>
      <button className = "btn error-btn ml-3" onClick={props.clearError}>Cerrar</button>
    </div>
  );
}