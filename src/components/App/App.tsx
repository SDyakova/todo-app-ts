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
        taskItems: [
          ...taskItems,
          { id: maxId++, title: e.target.value, isCompleted: false },
        ],
      }));
      e.target.value = "";
    }
  };

  const deleteTask = (id: number) => {
    setAppState((appState) => {
      const newArr = taskItems.filter((task) => task.id !== id);
      return {
        ...appState,
        taskItems: newArr,
      };
    });
  };

  const editTask = (id: number, title: string) => {
    setAppState((appState) => {
      const newArr = taskItems.map((task) =>
        task.id === id ? { ...task, title } : task
      );

      return { ...appState, taskItems: newArr };
    });
  };

  const onToggleCompleted = (id: number) => {
    setAppState((appState) => {
      const newArr = taskItems.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      );

      return { ...appState, taskItems: newArr };
    });
  };

  return (
    <div className={classes.app}>
      <main className={classes.main}>
        <NewTaskForm addTask={addTask} />
        <TaskList
          taskItems={taskItems}
          onDeleted={deleteTask}
          onEditingTask={editTask}
          onCompleted={onToggleCompleted}
        />
        <Footer />
      </main>
    </div>
  );
};

export default App;
