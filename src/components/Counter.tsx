import { Component, createSignal } from "solid-js";

export const Counter: Component = () => {
  const [count, setCount] = createSignal(0);

  setInterval(() => setCount(count() + 1), 1000);

  return <div>Count: {count()}</div>;
};
