import "./styles.css";
import { KanjiContext } from "./KanjiContext.js";
import Home from "./components/Home.js";

export default function App() {
  const value = "kanji data";
  return (
    <div className="App">
      <KanjiContext.Provider value={value}>
        <Home />
      </KanjiContext.Provider>
    </div>
  );
}
