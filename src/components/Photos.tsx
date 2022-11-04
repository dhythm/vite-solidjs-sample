import { Component, createSignal, For, onMount } from "solid-js";
import "./photos.css";

export const Photos: Component = () => {
  const [photos, setPhotos] = createSignal<
    { thumbnailUrl: string; title: string }[]
  >([]);

  onMount(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=20`
    );
    setPhotos(await res.json());
  });

  return (
    <>
      <h1>Photo album</h1>

      <div class="photos">
        <For each={photos()} fallback={<p>Loading...</p>}>
          {(photo) => (
            <figure>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <figcaption>{photo.title}</figcaption>
            </figure>
          )}
        </For>
      </div>
    </>
  );
};
