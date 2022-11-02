/* eslint-disable */
import React from 'react';
import TodoContainer from './TodoContainer';
import About from './About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// eslint-disable-next-line
const App = () => {

  return (
    <Router>
      <Routes>
      <Route path='/' element={<div className='todo-container'><TodoContainer /></div>}></Route>
      <Route path='/about' element={<About />}></Route>
      </Routes>
  </Router>);
};

export default App;
