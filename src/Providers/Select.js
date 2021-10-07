import { createContext, useState } from "react";

export const SelectContext = createContext();

export const SelectProvider = ({ children }) => {
  const [select, setSelect] = useState();
  const [itemSelect, setItemSelect] = useState({});

  return (
    <SelectContext.Provider
      value={{ itemSelect, setItemSelect, select, setSelect }}
    >
      {children}
    </SelectContext.Provider>
  );
};
