import { useContext } from "react";
import { Link } from "react-router-dom";
import { ConfraternizacaoContext } from "../../Providers/Confraternizacao";
import { BtnCf, DivConfra, SectionCf } from "./style";

const Confraternizacao = () => {
  const { listConfra, setListConfra } = useContext(ConfraternizacaoContext);

  const Remove = (id) => {
    const newList = listConfra.filter((item) => item.id !== id);
    setListConfra(newList);
  };
  return (
    <DivConfra>
      <h2>Bebidas da Confraternizacao</h2>
      <SectionCf>
        {listConfra.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <BtnCf onClick={() => Remove(item.id)}>Remover</BtnCf>
          </div>
        ))}
      </SectionCf>
      <Link to="/">Voltar</Link>
    </DivConfra>
  );
};
export default Confraternizacao;
