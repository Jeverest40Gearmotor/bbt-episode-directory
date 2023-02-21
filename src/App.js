import React, { useState } from 'react';
import logo from './TBBTLogo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
//npm install
//npm install react-boostrap bootstrap
//npm run start

function App() {
  const [apiData, setObj] = useState('Hello');
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
  }

/*

*/

  return (
    <>
    <div className="App">
      <div class="card">
        <div class="card-body">
          <h1>Big Bang Theory Episode Directory</h1>
        </div>
      </div>
      <img src={logo} alt="Imagine the show's logo here"/>
      <br></br>
      <Button onClick={onClick}>Update Data</Button>
    </div>

    </>
  );
}

export default App;
