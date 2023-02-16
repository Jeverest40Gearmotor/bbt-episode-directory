import React, { useState } from 'react';
import logo from './TBBTLogo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
//npm install
//npm install react-boostrap bootstrap
//npm run start

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
      <h1>Big Bang Theory Episode Directory</h1>
      <img src={logo} alt="Imagine the show's logo here"/>
      <Button onClick={onClick}>Update Data</Button>
      <p>{jsonData}</p>
    </div>

    </>
  );
}

export default App;
