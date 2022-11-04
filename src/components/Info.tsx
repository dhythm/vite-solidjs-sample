import { Component } from "solid-js";

type Props = {
  name: string;
  speed: string;
  version: number;
  website: string;
};

const Info: Component<Props> = (props) => {
  return (
    <p>
      The <code>{props.name}</code> package is {props.speed} fast. Download
      version {props.version} from{" "}
      <a href={`https://www.npmjs.com/package/${props.name}`}>npm</a> and{" "}
      <a href={props.website}>learn more here</a>
    </p>
  );
};

const pkg = {
  name: "solid-js",
  version: 1,
  speed: "⚡️",
  website: "https://solidjs.com",
};

export const InfoWrapper = () => <Info {...pkg} />;
