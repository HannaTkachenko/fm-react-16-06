import { Formik, Form, Field } from "formik";
import React from "react";
import { useTodo } from "../../hooks";

const Todo = () => {
  const { tasks, addTask, setDoneTask, deleteTask } = useTodo([
    {
      id: Date.now(),
      body: "test task",
      isDone: false,
    },
  ]);
  return (
    <div>
      <Formik initialValues={{ body: "" }} onSubmit={addTask}>
        <Form>
          <Field name="body" />
          <input type='submit' value='add' />
        </Form>
      </Formik>
      <h2>tasks list</h2>
      <ul>
        {
          tasks.map((task)=><li key={task.id}>{task.body} <span onClick={()=>{deleteTask(task.id)}}>X</span></li>)
        }
      </ul>
    </div>
  );
};
export default Todo;
