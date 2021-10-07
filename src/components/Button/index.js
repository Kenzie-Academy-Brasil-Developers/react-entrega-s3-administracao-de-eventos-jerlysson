import { useContext } from "react";
import { Btn } from "./style";
import { SelectContext } from "../../Providers/Select";

function Button({ item }) {
  const { setItemSelect, setSelect } = useContext(SelectContext);

  const handleClick = () => {
    setSelect(true);
    setItemSelect(item);
  };
  return (
    <>
      <Btn onClick={handleClick}>Adcionar</Btn>
    </>
  );
}
export default Button;
