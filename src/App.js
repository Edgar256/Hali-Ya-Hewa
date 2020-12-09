import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Location from './pages/Location';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Welcome} />
        <Route path='/location' component={Location} />
      </Switch>
    </Router>
  );
}

export default App;
