import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
      <img alt="random" src={img + "?grayscale"} />
    </h1>
  </div>,
  document.getElementById("root")
);
