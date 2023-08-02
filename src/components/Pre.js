import React from "react";
function Pre(props) {
  return (
    <div
      className={props.load ? "preloader" : "preloader preloader-none"}
    ></div>
  );
}

export default Pre;
