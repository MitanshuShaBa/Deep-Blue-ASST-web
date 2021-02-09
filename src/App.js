import "./App.css";
import { useStateValue } from "./Layout/StateProvider";

import Communications from "./Communications";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Household from "./Household";
import Activity from "./Activity";
import Home from "./Home";
import { db } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

   db.collection("users")
     .get()
     .then(function (querySnapshot) {
       querySnapshot.forEach(function (doc) {
         console.log(doc.id, " => ", doc.data());
       });
     })
    .catch((err) => console.log(err));

  return (
    <Router>
      <div>
        <Sidebar>
          <div>
            <Switch>
              <Route path="/household">
                <Household />
              </Route>
              <Route path="/communications">
                <Communications />
              </Route>
              <Route path="/activity">
                <Activity />
              </Route>
              <Route path="/home">
                <Home />
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
