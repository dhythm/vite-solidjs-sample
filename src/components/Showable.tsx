import { Component, createSignal, Show } from "solid-js";

export const Showable: Component = () => {
  const [loggedIn, setLoggedIn] = createSignal(false);
  const toggle = () => setLoggedIn(!loggedIn());

  return (
    <Show when={loggedIn()} fallback={<button onClick={toggle}>Log in</button>}>
      <button onClick={toggle}>Log out</button>
    </Show>
  );
};
