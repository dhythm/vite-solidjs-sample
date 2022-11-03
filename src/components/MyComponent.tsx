import { Component, createEffect, createSignal } from "solid-js";

export const MyComponent: Component<{ name: string }> = (props) => {
  const [first, setFirst] = createSignal("JSON");
  const [last, setLast] = createSignal("Bourne");

  createEffect(() => console.log(`${first()} ${last()}`));

  return <div>Hello {props.name}</div>;
};
