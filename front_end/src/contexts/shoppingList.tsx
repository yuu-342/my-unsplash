import React, { createContext, useState } from "react";
import {Item, ShoppingListContextType} from "../types";
export const ShoppingListContext = createContext({} as ShoppingListContextType);

const ShoppingListProvider:React.FC = ({ children }) => {
  const [shoppingList, setShoppingList] = useState<Item[] | never[]>([]);

  return (
    <ShoppingListContext.Provider value={{shoppingList, setShoppingList}}>
      { children }
    </ShoppingListContext.Provider>
  )
};

export default ShoppingListProvider;