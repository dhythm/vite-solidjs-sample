import { createMemo, createRoot, createSignal } from "solid-js";

const createCounter = () => {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);
  const doubleCount = createMemo(() => count() * 2);
  return { count, doubleCount, increment };
};

const root = createRoot(createCounter);

export const Counter = () => {
  const { count, doubleCount, increment } = root;

  return (
    <button type="button" onClick={increment}>
      {count()} {doubleCount()}
    </button>
  );
};
