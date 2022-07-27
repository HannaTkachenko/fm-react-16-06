import { useState } from "react";

const useTodo = (initialValue) => {
  const [tasks, setTasks] = useState(initialValue);

  return {
    tasks,
    addTask: (value) => {
      const newTask = {
        id: Date.now(),
        body: value.body,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
    },
    setDoneTask: (id) => {}, //map
    deleteTask: (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
  };
};

export default useTodo;
