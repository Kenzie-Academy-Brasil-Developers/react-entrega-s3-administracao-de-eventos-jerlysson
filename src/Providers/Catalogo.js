import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import api from "../services/api";

export const CatalogoContext = createContext([]);

export const CatalogoProvider = ({ children }) => {
  const [catalogo, setCatalogo] = useState([]);
  const history = useHistory();
  const GetPage = (path, set) => {
    history.push(path);
    set(false);
  };

  useEffect(() => {
    api
      .get("/beers")
      .then((res) => {
        console.log(res.data);
        setCatalogo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CatalogoContext.Provider value={{ catalogo, GetPage }}>
      {children}
    </CatalogoContext.Provider>
  );
};
