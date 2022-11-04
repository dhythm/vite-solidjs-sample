import { lazy, Suspense } from "solid-js";

export const SuspenseGreeting = () => {
  return (
    <>
      <h1>Welcome</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Greeting name="Jake" />
      </Suspense>
    </>
  );
};

const Greeting = lazy(async () => {
  await new Promise((r) => setTimeout(r, 1000));
  return import("./LazyGreeting");
});
