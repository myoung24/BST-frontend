import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import EnterNumbers from "./Components/EnterNumbers";
import ProcessNumbers from "./Components/ProcessNumbers";
import PreviousTrees from "./Components/PreviousTrees";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enter-numbers" element={<EnterNumbers />} />  
          <Route path="/process-numbers" element={<ProcessNumbers />} />  
          <Route path="/previous-trees" element={<PreviousTrees />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
