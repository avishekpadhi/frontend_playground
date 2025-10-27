import React from "react";
import type { Todo } from "../model";

interface Props {
  todos: Todo[];
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo: Todo) => {
        return (
          <div key={todo.id}>
            #{todo.id} - {todo.todo}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
