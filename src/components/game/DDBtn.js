import React from "react";
import Button from "../custom/Button";

function DDBtn({ onClick }) {
  return (
    <div className="downBtn pad-10">
      <Button
        css={"btn btn-dark btn-block ddBtn"}
        text={"DOUBLE DOWN"}
        onClick={onClick}
      />
    </div>
  );
}

export default DDBtn;
