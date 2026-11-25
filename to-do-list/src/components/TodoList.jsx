import { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const keyword = search.trim().toLowerCase();
  const filteredTodos = todos.filter((todo) =>
    todo.content.toLowerCase().includes(keyword),
  );

  return (
    <div className="TodoList">
      <h4>Bucket List</h4>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos-wrapper">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
