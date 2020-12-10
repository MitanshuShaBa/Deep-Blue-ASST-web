import "./App.css";
import Navbar from "./Layout/Navbar";
import { useStateValue } from "./Layout/StateProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ minHeight: window.innerHeight }}>
          <Switch>
            <Route path="/account">
              <h1>Account</h1>
            </Route>
            <Route path="/register">
              <h1>Account</h1>
            </Route>
            <Route path="/log">
              <h1>Hello</h1>
            </Route>
            <Route path="/login">
              <h1>Account</h1>
            </Route>
            <Route path="/cart">
              <h1>Account</h1>
            </Route>
            <Route path="/">
              <h1>Start Studying</h1>
            </Route>
          </Switch>
        </div>
        <footer
          style={{
            position: "static",
            right: 0,
            bottom: 0,
            width: "100%",
            color: "white",
            textAlign: "right",
            marginTop: "15vh",
          }}
        >
          <a href="https://www.freepik.com/vectors/logo">
            Logo vector created by catalyststuff - www.freepik.com
          </a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
