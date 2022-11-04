import { Component } from "solid-js";

type Props = {
  name: string;
};
const Greeting: Component<Props> = (props) => {
  return <h3>Hi, {props.name}</h3>;
};
export default Greeting;
