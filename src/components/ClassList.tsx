import { Component, createSignal } from "solid-js";
import "./class-list.css";

export const ClassList: Component = () => {
  const [current, setCurrent] = createSignal("foo");

  return (
    <>
      <button
        classList={{ selected: current() === "foo" }}
        onClick={() => setCurrent("foo")}
      >
        foo
      </button>
      <button
        classList={{ selected: current() === "bar" }}
        onClick={() => setCurrent("bar")}
      >
        bar
      </button>
      <button
        classList={{ selected: current() === "baz" }}
        onClick={() => setCurrent("baz")}
      >
        baz
      </button>
    </>
  );
};
