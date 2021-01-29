import "./App.css";
import { useStateValue } from "./Layout/StateProvider";

import Communications from "./Communications";
import Community from "./Community";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Household from "./Household";
import Activity from "./Activity";
import Home from "./Home";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Router>
      <div>
        <Sidebar>
          <div>
            <Switch>
              <Route path="/community">
                <Community />
              </Route>
              <Route path="/household">
                <Household />
              </Route>
              <Route path="/communications">
                <Communications />
              </Route>
              <Route path="/activity">
                <Activity />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Sidebar>
      </div>
    </Router>
  );
}

export default App;
