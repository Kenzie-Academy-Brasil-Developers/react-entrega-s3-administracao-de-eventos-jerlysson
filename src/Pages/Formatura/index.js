import { useContext } from "react";
import { Link } from "react-router-dom";
import { FormaturaContext } from "../../Providers/Formatura";
import { BtnF, DivForma, SectionF } from "./style";

const Formatura = () => {
  const { listFormatura, setListFormatura } = useContext(FormaturaContext);
  console.log(listFormatura);
  const Remove = (id) => {
    const newList = listFormatura.filter((item) => item.id !== id);
    setListFormatura(newList);
  };
  return (
    <DivForma>
      <h2>Bebidas da Formatura</h2>
      <SectionF>
        {listFormatura.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <BtnF onClick={() => Remove(item.id)}>Remover</BtnF>
          </div>
        ))}
      </SectionF>
      <Link to="/">Voltar</Link>
    </DivForma>
  );
};
export default Formatura;
