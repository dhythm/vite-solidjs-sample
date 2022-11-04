import { Component, createSignal } from "solid-js";

export const Position: Component = () => {
  const [pos, setPos] = createSignal({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      The mouse position is {pos().x} x {pos().y}
    </div>
  );
};
