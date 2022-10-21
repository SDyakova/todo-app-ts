import React, { useState } from "react";

import Footer from "../Footer";
import { mockData } from "../mocks/mocks";
import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import { AppStateModel } from "../types/types";

import classes from "./App.module.scss";

export let maxId = 100;

const App = () => {
  const initialState = {
    taskItems: [...mockData],
    filteredItems: [],
    currentFilter: "All",
  };

  const [appState, setAppState] = useState<AppStateModel>(initialState);
  const { taskItems, currentFilter, filteredItems } = appState;

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

  const getFilteredItems = (title: string) => {
    setAppState((appState) => {
      let filteredItems = [];

      if (title === "Completed") {
        filteredItems = taskItems.filter((task) => task.isCompleted);
      } else if (title === "Active") {
        filteredItems = taskItems.filter((task) => !task.isCompleted);
      } else {
        filteredItems = taskItems;
      }

      return {
        ...appState,
        filteredItems: filteredItems,
        currentFilter: title,
      };
    });
  };

  const handlerClearCompleted = () => {
    const newState = taskItems.filter((task) => !task.isCompleted);

    setAppState((appState) => {
      return {
        ...appState,
        taskItems: newState,
        filteredItems: newState,
      };
    });
  };

  return (
    <div className={classes.app}>
      <main className={classes.main}>
        <NewTaskForm addTask={addTask} />
        <TaskList
          taskItems={currentFilter === "All" ? taskItems : filteredItems}
          onDeleted={deleteTask}
          onEditingTask={editTask}
          onCompleted={onToggleCompleted}
        />
        <Footer
          onFiltered={getFilteredItems}
          onClearCompleted={handlerClearCompleted}
          taskItems={taskItems}
          currentFilter={currentFilter}
        />
      </main>
    </div>
  );
};

export default App;
