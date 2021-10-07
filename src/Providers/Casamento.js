import { createContext, useState } from "react";

export const CasamentoContext = createContext();

export const CasamentoProvider = ({ children }) => {
  const [listCasamento, setListCasamento] = useState([]);

  return (
    <CasamentoContext.Provider value={{ listCasamento, setListCasamento }}>
      {children}
    </CasamentoContext.Provider>
  );
};
