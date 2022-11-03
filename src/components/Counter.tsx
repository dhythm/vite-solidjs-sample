import { Component, createSignal } from "solid-js";

export const Counter: Component = () => {
  const [count, setCount] = createSignal(0);
  const doubleCount = () => count() * 2;

  setInterval(() => setCount(count() + 1), 1000);

  return <div>Count: {doubleCount()}</div>;
};
