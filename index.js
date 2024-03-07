import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { KanjiContext } from "./KanjiContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <KanjiContext>
    <App />
  </KanjiContext>
);
