import { createContext, useState } from "react";

export const MyKanjis = createContext();

const KanjiContext = ({
  kanjiData = [
    {
      id: 103,
      kanji: "同",
      stroke: 6,
      meaning: "same",
      on: "dō",
      kun: "ona-ji",
    },
  ],
}) => {
  const [storeKanjis, setStoreKanjis] = useState([]);
  return;
  <MyKanjis.Provider value={{ storeKanjis, setStoreKanjis }}>
    {kanjiData}
  </MyKanjis.Provider>;
};

export default KanjiContext;
