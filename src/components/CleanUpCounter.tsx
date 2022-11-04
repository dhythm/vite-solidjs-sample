import { Component, createSignal, onCleanup } from "solid-js";

export const Counter: Component = () => {
  const [count, setCount] = createSignal(0);

  const timer = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(timer));

  return <div>Count: {count()}</div>;
};
