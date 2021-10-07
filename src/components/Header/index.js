import { useContext } from "react";
import { CatalogoContext } from "../../Providers/Catalogo";
import { FormaturaContext } from "../../Providers/Formatura";
import { CasamentoContext } from "../../Providers/Casamento";
import { ConfraternizacaoContext } from "../../Providers/Confraternizacao";
import { HeaderBox, Menu } from "./style";
import { SelectContext } from "../../Providers/Select";

function Header() {
  const { GetPage } = useContext(CatalogoContext);
  const { listFormatura } = useContext(FormaturaContext);
  const { listCasamento } = useContext(CasamentoContext);
  const { listConfra } = useContext(ConfraternizacaoContext);
  const { setSelect } = useContext(SelectContext);

  return (
    <HeaderBox>
      <div></div>
      <h1>Adega Kenzie</h1>
      <Menu>
        <span onClick={() => GetPage("/formatura", setSelect)}>
          Formatura
          {listFormatura.length > 0 ? <div>{listFormatura.length}</div> : ""}
        </span>

        <span onClick={() => GetPage("/casamento", setSelect)}>
          Casamento
          {listCasamento.length > 0 ? <div>{listCasamento.length}</div> : ""}
        </span>

        <span onClick={() => GetPage("/confra", setSelect)}>
          Confraternizaçao
          {listConfra.length > 0 ? <div>{listConfra.length}</div> : ""}
        </span>
      </Menu>
    </HeaderBox>
  );
}

export default Header;
