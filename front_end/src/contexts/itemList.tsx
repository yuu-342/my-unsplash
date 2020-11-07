import React, { createContext, useState } from "react";
import { ItemListContextType, ItemList } from "../types";
export const ItemListContext = createContext({} as ItemListContextType);

const ItemListProvider:React.FC = ({ children }) => {
  const [itemList, setItemList] = useState<ItemList[] | never[]>([]);
  return (
    <ItemListContext.Provider value={{itemList, setItemList}}>
      { children }
    </ItemListContext.Provider>
  )
};

export default ItemListProvider;