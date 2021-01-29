import "./App.css";
import Navbar from "./Layout/Navbar";
import Community from "./Community";
import { useStateValue } from "./Layout/StateProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { Component } from "react";
import Household from "./Household";
import Activity from "./Activity";
import Home from "./Home";


function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Router>
      <div>
        <div>
          <Navbar />
        </div>
        <Switch>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/household">
            <Household />
          </Route>
          <Route path="/activity">
            <Activity />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
