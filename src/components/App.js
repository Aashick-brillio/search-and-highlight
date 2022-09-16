import React, { useState } from "react";
import Highlight from "./Highlight";
import { inputValue } from "./resource";

const App = () => {
  let [content, setContent] = useState(inputValue);
  let searchValue = React.createRef();

  const onChangeSearchHandler = (e) => {
    if (e.target.value.length === 0) {
      setContent(inputValue);
      return;
    }

    setContent(
      <Highlight
        searchedText={searchValue.current.value}
        inputValue={inputValue}
      />
    );
  };

  return (
    <div>
      <h2>Search</h2>
      <input type="text" ref={searchValue} onChange={onChangeSearchHandler} />
      <p>{content}</p>
    </div>
  );
};

export default App;
