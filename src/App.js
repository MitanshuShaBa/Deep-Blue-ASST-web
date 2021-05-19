import "./App.css";
import { useStateValue } from "./Layout/StateProvider";

import Communications from "./Communications";
import Sidebar from "./Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Household from "./Household";
import Activity from "./Activity";
import Home from "./Home";
import LoginPage from "./LoginPage";
import { auth, db } from "./firebase";
import { useEffect } from "react";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      const getUserDoc = () => {
        db.collection("users")
          .where("email", "==", user.email)
          .limit(1)
          .get()
          .then((querySnapshot) => {
            let docs = [];
            querySnapshot.forEach((doc) => {
              docs.push(doc);
            });
            let doc = docs[0];
            if (doc.data()) {
              // console.log("Got Data", doc.data());
              dispatch({
                type: "UPDATE_USERDOC",
                userDoc: doc.data(),
              });
            } else {
              // console.log("Retrying to get data");
              getUserDoc();
            }
          })
          .catch((error) => console.log(error));
      };
      getUserDoc();
    }
  }, [user]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
        dispatch({
          type: "UPDATE_USERDOC",
          userDoc: {},
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  //  db.collection("users")
  //    .get()
  //    .then(function (querySnapshot) {
  //      querySnapshot.forEach(function (doc) {
  //        console.log(doc.id, " => ", doc.data());
  //      });
  //    })
  //   .catch((err) => console.log(err));

  return (
    <Router>
      <div>
        <Sidebar>
          <div>
            <Switch>
              <ProtectedRoute path="/household">
                <Household />
              </ProtectedRoute>
              <ProtectedRoute path="/communications">
                <Communications />
              </ProtectedRoute>
              <ProtectedRoute path="/activity">
                <Activity />
              </ProtectedRoute>
              <Route path="/login">
                <LoginPage />
              </Route>
              <ProtectedRoute path="/home">
                <Home />
              </ProtectedRoute>
              <ProtectedRoute path="/">
                <Home />
              </ProtectedRoute>
            </Switch>
          </div>
        </Sidebar>
      </div>
    </Router>
  );
}

const ProtectedRoute = ({ children, ...props }) => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <Route
      {...props}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default App;
