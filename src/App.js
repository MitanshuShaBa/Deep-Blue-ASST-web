import "./App.css";
import Navbar from "./Layout/Navbar";
import { useStateValue } from "./Layout/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
