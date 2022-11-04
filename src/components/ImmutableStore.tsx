import { createStore as createReduxStore } from "redux";
import { For, onCleanup } from "solid-js";
import { createStore as createSolidJSStore, reconcile } from "solid-js/store";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
type State = {
  todos: Todo[];
};

const todos = (state: State = { todos: [] }, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            complete: false,
          },
        ],
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
};

const reduxStore = createReduxStore(todos);

let nextTodoId = 0;
const actions = {
  addTodo: (text: string) => ({ type: "ADD_TODO", id: ++nextTodoId, text }),
  toggleTodo: (id: number) => ({ type: "TOGGLE_TODO", id }),
};

const useRedux = (store: any, actions: any) => {
  const [state, setState] = createSolidJSStore<State>(store.getState());
  const unsubscribe = store.subscribe(() =>
    setState(reconcile(store.getState()))
  );
  onCleanup(() => unsubscribe());
  return [state, mapActions(store, actions)];
};

const mapActions = (store: any, actions: any) => {
  const mapped: any = {};
  for (const key in actions) {
    mapped[key] = (...args: any) => store.dispatch(actions[key](...args));
  }
  return mapped;
};

export const ReduxApp = () => {
  const [store, { addTodo, toggleTodo }] = useRedux(reduxStore, actions);
  let input: HTMLInputElement | undefined;
  return (
    <>
      <div>
        <input ref={input} />
        <button
          onClick={(e) => {
            if (!input || !input.value.trim()) return;
            addTodo(input.value);
            input.value;
          }}
        >
          Add Todo
        </button>
      </div>
      <For each={store.todos}>
        {(todo) => {
          const { id, text } = todo;
          console.log("Create", text);
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
