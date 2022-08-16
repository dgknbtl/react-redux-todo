import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App h-full">
      <div className="flex items-center justify-center h-full">
        <div className="w-[400px]  p-3 shadow-md bg-white">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
