import { useContext } from "react";
import { CatalogoContext } from "../../Providers/Catalogo";
import { HeaderBox, Menu } from "./style";

function Header() {
  const { GetPage } = useContext(CatalogoContext);
  return (
    <HeaderBox>
      <div></div>
      <h1>Adega Kenzie</h1>
      <Menu>
        <span onClick={() => GetPage("/formatura")}>Formatura</span>
        <span onClick={() => GetPage("/casamento")}>Casamento</span>
        <span onClick={() => GetPage("/confra")}>Confraternizaçao</span>
      </Menu>
    </HeaderBox>
  );
}

export default Header;
