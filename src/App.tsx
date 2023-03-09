import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RecyclerMainPage from './context/RecyclerMainPage';
// import Auth from './components/Auth/Auth';
// import { Redirect, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <RecyclerMainPage />
      <Footer />
      {/* <Switch>
    //     <Route path="/auth/:type" component={Auth} />
    //     <Route path="*">
    //       <Redirect to="/auth/sign-in" />
    //     </Route>
    //   </Switch> */}
    </div>
  );
};

export default App;
