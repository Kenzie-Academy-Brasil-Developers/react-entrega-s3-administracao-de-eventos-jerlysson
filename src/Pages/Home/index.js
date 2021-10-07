import { useContext } from "react";
import { CatalogoContext } from "../../Providers/Catalogo";
import Button from "../../components/Button";
import SelectEvent from "../../components/SelectEvent";
import { CardBeer, CatalogoList, Image } from "./style";
import { SelectContext } from "../../Providers/Select";

const Home = () => {
  const { catalogo } = useContext(CatalogoContext);
  const { select } = useContext(SelectContext);
  return (
    <CatalogoList>
      {select && <SelectEvent />}
      {catalogo.map((item) => (
        <CardBeer key={item.id}>
          <p>{item.name.slice(0, 14)}</p>
          <Image src={item.image_url} alt={item.name} />
          <Button item={item} />
        </CardBeer>
      ))}
    </CatalogoList>
  );
};
export default Home;
