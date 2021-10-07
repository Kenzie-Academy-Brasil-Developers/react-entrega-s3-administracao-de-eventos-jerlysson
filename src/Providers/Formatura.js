import { createContext, useEffect, useState } from "react";

export const FormaturaContext = createContext();

export const FormaturaProvider = ({ children }) => {
  const [listFormatura, setListFormatura] = useState([]);

  return (
    <FormaturaContext.Provider value={{ listFormatura, setListFormatura }}>
      {children}
    </FormaturaContext.Provider>
  );
};
