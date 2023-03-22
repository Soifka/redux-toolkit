import CounterPage from 'pages/CounterPage';
import HomePage from 'pages/HomePage';
import UsersPage from 'pages/UsersPage';
import NotFoundPage from 'pages/NotFoundPage';
import { Switch, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/counter" component={CounterPage} />
      <Route exact path="/users" component={UsersPage} />
      <Route path="*" component={NotFoundPage} />
      <CounterPage />
    </Switch>
  );
}

export default App;
