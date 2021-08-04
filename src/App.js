
import './App.css';
import SearchPage from './Pages/SearchPage';
import Home from './Pages/Home';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/search'><SearchPage></SearchPage></Route>
          <Route path='/'><Home></Home></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
