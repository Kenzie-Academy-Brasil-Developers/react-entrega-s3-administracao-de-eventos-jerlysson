import { useContext } from "react";
import { CasamentoContext } from "../../Providers/Casamento";
import { ConfraternizacaoContext } from "../../Providers/Confraternizacao";
import { FormaturaContext } from "../../Providers/Formatura";
import { SelectContext } from "../../Providers/Select";
import { DivBtn, SelectBox, Close, DivDesc, BtnAdd } from "./style";

function SelectEvent() {
  const { itemSelect, setSelect } = useContext(SelectContext);
  const { setListFormatura, listFormatura } = useContext(FormaturaContext);
  const { listCasamento, setListCasamento } = useContext(CasamentoContext);
  const { listConfra, setListConfra } = useContext(ConfraternizacaoContext);

  const addBeer = (set, list) => {
    set([...list, itemSelect]);
  };

  return (
    <SelectBox>
      <Close onClick={() => setSelect(false)}> X </Close>
      <h2>{itemSelect.name}</h2>
      <img src={itemSelect.image_url} />
      <DivDesc>
        <p>{itemSelect.description}</p>
      </DivDesc>
      <DivBtn>
        <BtnAdd onClick={() => addBeer(setListFormatura, listFormatura)}>
          Formatura
        </BtnAdd>
        <BtnAdd onClick={() => addBeer(setListCasamento, listCasamento)}>
          Casamento
        </BtnAdd>
        <BtnAdd onClick={() => addBeer(setListConfra, listConfra)}>
          Confraternização
        </BtnAdd>
      </DivBtn>
    </SelectBox>
  );
}
export default SelectEvent;
