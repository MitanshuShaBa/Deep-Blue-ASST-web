import "./App.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useStateValue } from "./Layout/StateProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import Communications from "./Communications";
import Community from "./Community";
import Household from "./Household";
import Sidebar from "./Sidebar";

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
          </Switch>
        </div>
        </Sidebar> 
      </div>
    </Router>
  );
}

export default App;
