import React, { createContext, useState } from "react";
import { SelectItemContextType } from 'types';

export const SelectItemContext = createContext({} as SelectItemContextType);
const SelectItemProvider:React.FC = ({ children }) => {
  const [selectItem, setSelectItem] = useState({});

  return (
    <SelectItemContext.Provider value={{selectItem, setSelectItem}}>
      { children }
    </SelectItemContext.Provider>
  )
};

export default SelectItemProvider;