import { For } from "solid-js";
import { createStore, produce } from "solid-js/store";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export const TodosWithStore = () => {
  const [todos, setTodos] = createStore<Todo[]>([]);
  let input: HTMLInputElement | undefined;
  let todoId = 0;

  const addTodo = (text: string) => {
    setTodos([...todos, { id: ++todoId, text, completed: false }]);
  };
  const toggleTodo = (id: number) => {
    // setTodos(
    //   (todo) => todo.id === id,
    //   "completed",
    //   (completed) => !completed
    // );
    setTodos(
      (todo) => todo.id === id,
      produce((todo) => (todo.completed = !todo.completed))
    );
  };

  return (
    <>
      <div>
        <input ref={input} />
        <button
          onClick={(e) => {
            if (!input || !input.value.trim()) return;
            addTodo(input.value);
            input.value = "";
          }}
        >
          Add Todo
        </button>
      </div>
      <For each={todos}>
        {(todo) => {
          const { id, text } = todo;
          console.log(`Creating ${text}`);
          return (
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onchange={[toggleTodo, id]}
              />
              <span
                style={{
                  "text-decoration": todo.completed ? "line-through" : "none",
                }}
              >
                {text}
              </span>
            </div>
          );
        }}
      </For>
    </>
  );
};
