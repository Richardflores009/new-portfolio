import './App.css';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from "react-router-dom";
import { projects } from "./components/ProjectInfo/projectInfo";



function App() {
  return (
    <Router>
      <div className="body">
        <Home />
      </div>
    </Router>
  );
}

export default App;
