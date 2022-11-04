import { Accessor, createSignal, For, Setter } from "solid-js";

type Todo = {
  id: number;
  text: string;
  completed: Accessor<boolean>;
  setCompleted: Setter<boolean>;
};

export const Todos = () => {
  const [todos, setTodos] = createSignal<Todo[]>([]);
  let input: HTMLInputElement | undefined;
  let todoId = 0;

  const addTodo = (text: string) => {
    const [completed, setCompleted] = createSignal(false);
    setTodos([...todos(), { id: ++todoId, text, completed, setCompleted }]);
  };
  const toggleTod = (id: number) => {
    const todo = todos().find((t) => t.id === id);
    if (todo) todo.setCompleted(!todo.completed());
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
      <For each={todos()}>
        {(todo) => {
          const { id, text } = todo;
          console.log(`Creating ${text}`);
          return (
            <div>
              <input
                type="checkbox"
                checked={todo.completed()}
                onchange={[toggleTod, id]}
              />
              <span
                style={{
                  "text-decoration": todo.completed() ? "line-through" : "none",
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
