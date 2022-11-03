import { Component } from "solid-js";
import { Portal } from "solid-js/web";
/**
 * CSSs is imported by the following two kinds of ways.
 * import styles from 'xxx.modules.css'
 * import 'xxx.css'
 */
import "./popup.css";

export const Popup: Component = () => {
  return (
    <div class="app-container">
      <p>Just some text inside a div that has a restricted size.</p>
      <Portal>
        <div class="popup">
          <h1>Popup</h1>
          <p>Some text you might need for something or other.</p>
        </div>
      </Portal>
    </div>
  );
};
