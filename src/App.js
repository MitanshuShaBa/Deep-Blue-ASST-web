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

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route path="/community">
              <Community />
            </Route>
            <Route path="/household">
              <Household />
            </Route>
            <Route path="/">
              <h1>Home Page</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
