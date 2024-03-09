import "./styles.css";
import { KanjiContext } from "./KanjiContext.js";
import Home from "./components/Home.js";

export default function App() {
  const value = "kanji data";
  return (
    <div className="App">
      <h1>Welcome to Kanji App</h1>
      <KanjiContext.Provider value={value}>
        <Home />
      </KanjiContext.Provider>
    </div>
  );
}
