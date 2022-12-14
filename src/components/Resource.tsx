import { createResource, createSignal } from "solid-js";

export const Resource = () => {
  const [userId, setUserId] = createSignal<number>();
  const [user] = createResource(userId, fetchUser);

  return (
    <>
      <input
        type="number"
        min="1"
        placeholder="Enter Numeric Id"
        onInput={(e) => setUserId(Number(e.currentTarget.value))}
      />
      <span>{user.loading && "Loading..."}</span>
      <div>
        <pre>{JSON.stringify(user(), null, 2)}</pre>
      </div>
    </>
  );
};

const fetchUser = async (id: number) =>
  (await fetch(`https://swapi.dev/api/people/${id}/`)).json();
