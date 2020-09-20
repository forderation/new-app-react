import React, { useState } from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
  let [textInput, setTextInput] = useState("");
  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: textInput,
    };
    setTextInput("");
    props.onAddGoal(newGoal);
  };

  return (
    <form onSubmit={addGoalHandler}>
      <input
        type="text"
        onChange={(event) => setTextInput(event.target.value)}
        value={textInput}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
