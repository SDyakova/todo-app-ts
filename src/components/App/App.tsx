import React from "react";

import Footer from "../Footer";
import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";

import classes from "./App.module.scss";

const App = () => {
  return (
    <div className={classes.app}>
      <main className={classes.main}>
        <NewTaskForm />
        <TaskList />
        <Footer />
      </main>
    </div>
  );
};

export default App;
