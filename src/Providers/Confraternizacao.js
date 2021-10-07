import { createContext, useState } from "react";

export const ConfraternizacaoContext = createContext();

export const ConfraternizacaoProvider = ({ children }) => {
  const [listConfra, setListConfra] = useState([]);

  return (
    <ConfraternizacaoContext.Provider value={{ listConfra, setListConfra }}>
      {children}
    </ConfraternizacaoContext.Provider>
  );
};
