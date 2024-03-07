import { createContext, useState } from "react";

export const MyKanjis = createContext();

const KanjiContext = ({dataKanjis}) = > {
    const [storeKanjis, setStoreKanjis] = useState([]);
    return 
        <MyKanjis.Provider value={{storeKanjis, setStoreKanjis}}>
{dataKanjis}
        </MyKanjis.Provider>
};

export default KanjiContext;
