// import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
// import Auth from './components/Auth/Auth';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header';
import Main from './components/Main/Main.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      {/* <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
