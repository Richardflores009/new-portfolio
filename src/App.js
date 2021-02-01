import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import About from './components/About'
import {Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router> 
      <div className="body">
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </nav> */}
        
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
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
