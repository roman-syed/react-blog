import Create from './Create';
import Home from './Home';
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {

    return (
      <Router>
        <div className='App'>
          <Navbar/>
          <div className='content'>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/create">
                <Create/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
    
}
export default App;