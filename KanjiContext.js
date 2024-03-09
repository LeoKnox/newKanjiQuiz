import { createContext, useState } from "react";

export const MyKanjis = createContext();

const KanjiContext = ({ kanjiData }) => {
  const [storeKanjis, setStoreKanjis] = useState([]);
  return (
    <MyKanjis.Provider value={{ storeKanjis, setStoreKanjis }}>
      {kanjiData}
    </MyKanjis.Provider>
  );
};

export default KanjiContext;
