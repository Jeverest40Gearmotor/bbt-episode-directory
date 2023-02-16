import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiData, setObj] = useState('Hello');
  var jsonData;
  const onClick = () => {
    fetch('https://us-central1-big-bang-theory-25fd5.cloudfunctions.net/bbt361642/bbt/episodes')
    .then(res => res.json())
    .then(data => {
      setObj(data);
     })
    .then(() => {
      console.log({apiData});
     });
    
     console.log({apiData});
     console.log("Clicked!")
     jsonData = JSON.stringify(apiData)
     console.log(jsonData)
  }

/*

*/

  return (
    <>
    <div className="App">
      <button className="update-button" type="button" onClick={onClick}>Update Data</button>
      <p>{jsonData}</p>
    </div>
    
    </>
  );
}

export default App;
