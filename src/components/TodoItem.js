import { useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex justify-between font-semibold">
      <span>{todo.body}</span>
      <span
        className="text-red-500 cursor-pointer"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        x
      </span>
    </li>
  );
};

export default TodoItem;
