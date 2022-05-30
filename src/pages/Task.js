import React, { useState } from "react";

const Task = () => {
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (val) => {
    setInputValue(val);
    setShow(false);
  };

  const handleSubmit = () => {
    setShow(true);
  };

  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e.target.value)} />
      <button onClick={() => handleSubmit()}>submit</button>
      {show ? <h2>{inputValue}</h2> : null}
    </div>
  );
};

export default Task;
