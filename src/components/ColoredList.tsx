import { children, Component, createEffect, createSignal, For } from "solid-js";

type Props = {
  color: string;
  children: any;
};

const ColoredList: Component<Props> = (props) => {
  const c = children(() => props.children);
  createEffect(() => c().forEach((item) => (item.style.color = props.color)));

  return <>{c()}</>;
};

export const ColoredListWrapper = () => {
  const [color, setColor] = createSignal("purple");

  return (
    <>
      <ColoredList color={color()}>
        <For each={["Most", "Interesting", "Thing"]}>
          {(item) => <div>{item}</div>}
        </For>
      </ColoredList>
      <button onClick={() => setColor("teal")}>Set Color</button>
    </>
  );
};
