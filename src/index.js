import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CatalogoProvider } from "./Providers/Catalogo";
import { SelectProvider } from "./Providers/Select";
import { FormaturaProvider } from "./Providers/Formatura";
import { CasamentoProvider } from "./Providers/Casamento";
import { ConfraternizacaoProvider } from "./Providers/Confraternizacao";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CatalogoProvider>
        <FormaturaProvider>
          <CasamentoProvider>
            <ConfraternizacaoProvider>
              <SelectProvider>
                <App />
              </SelectProvider>
            </ConfraternizacaoProvider>
          </CasamentoProvider>
        </FormaturaProvider>
      </CatalogoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
