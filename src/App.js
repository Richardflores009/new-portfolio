import './App.css';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router} from "react-router-dom";
import { projects } from "./components/ProjectInfo/projectInfo";



function App() {
  return (
    <Router> 
      <div className="body">
        {/* {projects.map(projects =>(
          <Home
          key={projects.id}
          image={projects.image}
          />
        ))} */}
        <Home></Home>
       
      </div>
    </Router>
  );
}

export default App;
