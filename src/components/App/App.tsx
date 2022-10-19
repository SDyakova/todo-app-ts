import React, { useState } from "react";

import Footer from "../Footer";
import { mockData } from "../mocks/mocks";
import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";

import classes from "./App.module.scss";

export let maxId = 100;

const App = () => {
  const initialState = {
    taskItems: [...mockData],
  };

  const [appState, setAppState] = useState(initialState);
  const { taskItems } = appState;

  const addTask = (e: { key: string; target: { value: any } }) => {
    if (e.key === "Enter") {
      setAppState((appState) => ({
        ...appState,
        taskItems: [...taskItems, { id: maxId++, title: e.target.value }],
      }));
    }
  };

  const deleteTask = (id: number) => {
    console.log(id);
    setAppState((appState) => {
      const newArr = taskItems.filter((task) => task.id !== id);
      return {
        ...appState,
        taskItems: newArr,
      };
    });
  };

  return (
    <div className={classes.app}>
      <main className={classes.main}>
        <NewTaskForm addTask={addTask} />
        <TaskList taskItems={taskItems} onDeleted={deleteTask} />
        <Footer />
      </main>
    </div>
  );
};

export default App;
