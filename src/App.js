import React from 'react';
import Header from './components/Header';
import Button from './components/Button';

function App() {
  return (
    <div className="container">

      <Header title ="Task tracker"/>
      <Button text ="add" color = "green"/>   

    </div>
  );
}
export default App;
