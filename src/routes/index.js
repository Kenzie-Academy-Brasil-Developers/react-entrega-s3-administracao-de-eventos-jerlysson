import { Route, Switch } from "react-router";
import Casamento from "../Pages/Casamento";
import Confraternizaçao from "../Pages/Confraternizacao";
import Formatura from "../Pages/Formatura";
import Home from "../Pages/Home";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/formatura">
          <Formatura />
        </Route>
        <Route path="/casamento">
          <Casamento />
        </Route>
        <Route path="/confra">
          <Confraternizaçao />
        </Route>
      </Switch>
    </>
  );
}
export default Routes;
