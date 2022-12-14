import React, { useState } from "react";
import "./TodolistApp.css";
import { Todolist } from "./Todolist";
import { v1 } from "uuid";

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};
export function TodolistApp() {
  let todolistID1 = v1();
  let todolistID2 = v1();

  let [todolists, setTodolists] = useState<Array<TodolistType>>([
    { id: todolistID1, title: "What to learn", filter: "all" },
    { id: todolistID2, title: "What to buy", filter: "all" },
  ]);

  let [tasks, setTasks] = useState({
    [todolistID1]: [
      { id: v1(), title: "HTML&CSS", isDone: true },
      { id: v1(), title: "JS", isDone: true },
      { id: v1(), title: "ReactJS", isDone: false },
      { id: v1(), title: "Rest API", isDone: false },
      { id: v1(), title: "GraphQL", isDone: false },
    ],
    [todolistID2]: [
      { id: v1(), title: "HTML&CSS2", isDone: true },
      { id: v1(), title: "JS2", isDone: true },
      { id: v1(), title: "ReactJS2", isDone: false },
      { id: v1(), title: "Rest API2", isDone: false },
      { id: v1(), title: "GraphQL2", isDone: false },
    ],
  });

  function removeTask(todolisId: string, id: string) {
    setTasks({
      ...tasks,
      [todolisId]: tasks[todolisId].filter((el) => el.id !== id),
    });
  }

  function addTask(todolisId: string, title: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    setTasks({ ...tasks, [todolisId]: [newTask, ...tasks[todolisId]] });
  }

  function changeStatus(
    todolistId: string,
    taskId: string,
    isDoneValue: boolean
  ) {
    setTasks({
      ...tasks,
      [todolistId]: tasks[todolistId].map((el) =>
        el.id === taskId ? { ...el, isDone: isDoneValue } : el
      ),
    });
  }

  function changeFilter(todolisId: string, value: FilterValuesType) {
    setTodolists(
      todolists.map((el) =>
        el.id === todolisId ? { ...el, filter: value } : el
      )
    );
  }

  return (
    <div className="App">
      {todolists.map((el) => {
        let tasksForTodolist = tasks[el.id];

        if (el.filter === "active") {
          tasksForTodolist = tasks[el.id].filter((t) => t.isDone === false);
        }
        if (el.filter === "completed") {
          tasksForTodolist = tasks[el.id].filter((t) => t.isDone === true);
        }

        return (
          <Todolist
            title={el.title}
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            filter={el.filter}
            todolistId={el.id}
          />
        );
      })}
    </div>
  );
}

