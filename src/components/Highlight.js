import React from "react";

const Highlight = ({ searchedText, inputValue }) => {
  console.log("inside=====");
  const parts = inputValue.split(new RegExp(`(${searchedText})`, "gi"));

  return (
    <span>
      {parts.map((part) =>
        part.toLowerCase() === searchedText.toLowerCase() ? (
          <span style={{ backgroundColor: "yellow" }}>{part}</span>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default Highlight;
