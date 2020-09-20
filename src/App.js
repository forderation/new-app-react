import React, { useState } from "react";
import "./App.css";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {

  
  const [goalListItem, updateGoalList] = useState([
    {
      id: "idc2",
      text: "Shoul learn more",
    },
    {
      id: "idc3",
      text: "javascrip react details",
    },
    {
      id: "idc1",
      text: "React redux is awesome",
    },
  ]);

  const addGoalHandler = (newGoal) => {
    // does not have depedent
    // updateGoalList(goalListItem.concat(newGoal));
    // depedency before item
    updateGoalList((prevGoals) => {
      return prevGoals.concat(newGoal);
    });
  };

  return (
    <div>
      <h2 className="goal-title">How about react</h2>
      <NewGoal onAddGoal={addGoalHandler} />
      <GoalList goalList={goalListItem} />
    </div>
  );
};

export default App;
