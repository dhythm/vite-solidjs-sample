import { Component, createContext, createSignal, useContext } from "solid-js";

const CounterContext = createContext<number>();

type Props = {
  count: number;
  children: any;
};

const CounterProvider: Component<Props> = (props) => {
  const [count, setCount] = createSignal(props.count || 0);
  const counter = [
    count,
    {
      increment: () => {
        setCount((c) => c + 1);
      },
      decrement: () => {
        setCount((c) => c - 1);
      },
    },
  ];

  return (
    <CounterContext.Provider value={counter}>
      {props.children}
    </CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);

const Nested = () => {
  const [count, { increment, decrement }] = useCounter();
  return (
    <>
      <div>{count()}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

const HeadingWithNested: Component = () => {
  return (
    <>
      <h1>Welcome to Counter App</h1>
      <Nested />
    </>
  );
};

export const Provided = () => (
  <CounterProvider count={1}>
    <HeadingWithNested />
  </CounterProvider>
);
