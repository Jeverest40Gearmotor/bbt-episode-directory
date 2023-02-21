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
      
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h1>Big Bang Theory Episode Directory <span class="align-middle"><img src={logo} alt="Imagine the show's logo here"/></span></h1>
          </div>
        </div>
      </div>

      <div className="card">

        
      </div>

      <br></br>
      <Button onClick={onClick}>Update Data</Button>
    </div>

    </>
  );
}

export default App;
