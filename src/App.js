import "./App.css";
import Navbar from "./Layout/Navbar";
import { useStateValue } from "./Layout/StateProvider";
import Home from "./Home.js"; 


function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
   
    <div className="App">
      <div className="app-header">
        <Navbar/>
      </div>     
      <div className="home">
        <Home/>
      </div> 
    </div>
  )    
        
};

export default App;
