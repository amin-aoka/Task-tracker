import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="container">

      <Header title ="Task Tracker"/>
      <Button text ="add" color = "green"/>   
      <Tasks/>
    </div>
  );
}
export default App;
