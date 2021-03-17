import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js"
import Projet from "./pages/Projet.js"
import Contact from "./pages/Contact.js"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/projet" component={Projet}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </BrowserRouter>
  );

}
export default App;
