import { useContext } from "react";
import { Link } from "react-router-dom";
import { CasamentoContext } from "../../Providers/Casamento";
import { BtnC, DivCasa, SectionC } from "./style";

const Casamento = () => {
  const { listCasamento, setListCasamento } = useContext(CasamentoContext);
  const Remove = (id) => {
    const newList = listCasamento.filter((item) => item.id !== id);
    setListCasamento(newList);
  };
  return (
    <DivCasa>
      <h2>Bebidas da Casamento</h2>
      <SectionC>
        {listCasamento.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <BtnC onClick={() => Remove(item.id)}>Remover</BtnC>
          </div>
        ))}
      </SectionC>
      <Link to="/">Voltar</Link>
    </DivCasa>
  );
};
export default Casamento;
