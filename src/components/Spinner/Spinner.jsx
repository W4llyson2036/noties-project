import React from "react";

// CSS
import './spinner.css';

export function Spinner(props) {
  const style = {
    spinner: {
      width: `${props.width}px`,
      height: `${props.height}px`,
      border: "5px solid gray",
      borderRadius: "50%",
      borderBottomColor: "transparent",
      animation: "spinner 1s linear infinite",
    },
  };

  return (
    <div style={style.spinner}></div>
  );
}