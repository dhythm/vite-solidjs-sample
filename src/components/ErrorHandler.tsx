import { Component, ErrorBoundary } from "solid-js";

export const ErrorHandler: Component = () => {
  return (
    <>
      <div>Before</div>
      <ErrorBoundary fallback={(err) => err}>
        <Broken />
      </ErrorBoundary>
      <div>After</div>
    </>
  );
};

const Broken = () => {
  throw new Error("Oh No");
  return <>Never Getting Here</>;
};
