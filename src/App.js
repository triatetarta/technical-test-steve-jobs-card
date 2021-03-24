import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Card from './Card';

function App() {
  return (
    <Switch>
      <section className='section'>
        <Route exact path='/'>
          <Card />
        </Route>
      </section>
    </Switch>
  );
}

export default App;
