import { Component, createSignal, splitProps } from "solid-js";

type Props = {
  greeting?: string;
  name?: string;
  style?: string;
};

const Greeting: Component<Props> = (props) => {
  const [local, others] = splitProps(props, ["greeting", "name"]);
  return (
    <h3 {...others}>
      {local.greeting} {local.name}
    </h3>
  );
};

export const GreetingWrapper = () => {
  const [name, setName] = createSignal("Jakob");

  return (
    <>
      <Greeting greeting="Yo" name={name()} style="color: teal;" />
      <button onClick={() => setName("Jarod")}>Set Name</button>
    </>
  );
};
