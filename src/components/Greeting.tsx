import { Component, createSignal, mergeProps } from "solid-js";

type Props = {
  greeting?: string;
  name?: string;
};

const Greeting: Component<Props> = (props) => {
  const merged = mergeProps({ greeting: "Hi", name: "John" }, props);

  return (
    <h3>
      {merged.greeting} {merged.name}
    </h3>
  );
};

export const GreetingWrapper = () => {
  const [name, setName] = createSignal<string>();

  return (
    <>
      <Greeting greeting="Hello" />
      <Greeting name="Jeremy" />
      <Greeting name={name()} />
      <button onClick={() => setName("Jarod")}>Set Name</button>
    </>
  );
};
