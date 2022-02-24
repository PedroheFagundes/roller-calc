import { Redirect, Route, Switch } from "react-router-dom";
import BetterCoin from "./pages/BetterCoin";
import Home from "./pages/Home";


const App = function () {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/better-coin">
        <BetterCoin />
      </Route>
      <Route>
        <Redirect to="/" />
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
