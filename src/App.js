import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiData, setObj] = useState('Hello');  
  /*
  async function apiFetch(){
    const res = await fetch('https://us-central1-big-bang-theory-25fd5.cloudfunctions.net/bbt361642/bbt/episodes')
    App.obj = await res.json();
    console.log(obj);
  }
  */

  
  fetch('https://us-central1-big-bang-theory-25fd5.cloudfunctions.net/bbt361642/bbt/episodes')
    .then(res => res.json())
    .then(data => {
      setObj(data);
     })
    .then(() => {
      console.log({apiData});
     });
    
     console.log({apiData});
  return (
    <div className="App">
      <p>hello</p>
    </div>
  );
}

export default App;
