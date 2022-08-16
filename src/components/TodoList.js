import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);
  console.log(todos);

  return (
    <div className="py-3">
      {todos.length ? (
        todos.map((todo, index) => <TodoItem todo={todo} key={todo.id} />)
      ) : (
        <span className="text-center text-gray-500 py-2 block">
          No task added yet
        </span>
      )}
    </div>
  );
};

export default TodoList;
