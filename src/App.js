import Menu from "./components/Menu";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Rotas from "./pages/Rotas";

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Rotas />
      </Switch>
    </Router>
  );
}

export default App;
