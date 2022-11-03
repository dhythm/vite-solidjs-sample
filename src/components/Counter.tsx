import { Component, createEffect, createSignal } from "solid-js";

export const Counter: Component = () => {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    console.log("The count is now", count());
  });

  return <button onClick={() => setCount(count() + 1)}>Click Me</button>;
};
