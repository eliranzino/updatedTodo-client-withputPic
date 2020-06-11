import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { TodoList } from './components/TodoList/TodoList';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Display } from './components/Display/Display'
import { CreateTasks } from './components/CreateTasks/CreateTaks';
import { Header } from './components/Header/Header';


export class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Display />
        <h3>Welcome to the Amazing TODO App!</h3>
        <Header/>
        <Switch>
          <Route path="/Tasks">
          <CreateTasks />
            <TodoList />
          </Route>
          <Route path="/">
            <Register />
            <Login />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
