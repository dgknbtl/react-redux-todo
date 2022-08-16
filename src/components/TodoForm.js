import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { v4 as uuidv4 } from "uuid";

const TodoForm = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: uuidv4(), body: todo }));
    setTodo("");
  };

  return (
    <form onSubmit={handleForm}>
      <div className="flex items-center">
        <input
          type="text"
          className="border border-gray-300 rounded py-1 px-3 h-[40px] w-full"
          placeholder="Add..."
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button
          type="submit"
          className=" bg-black rounded ml-2 text-white py-1 px-3 h-[40px] disabled:cursor-not-allowed disabled:bg-gray-400"
          disabled={!todo}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
