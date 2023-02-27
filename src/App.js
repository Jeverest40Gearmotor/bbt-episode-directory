import React, { useState, useEffect } from 'react';
import logo from './TBBTLogo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
//npm install
//npm install react-bootstrap bootstrap
//npm run start

function App() {
  const [apiData, setObj] = useState([]);

  useEffect(() => {
    fetch('https://us-central1-big-bang-theory-25fd5.cloudfunctions.net/bbt361642/bbt/episodes')
    .then(res => res.json())
    .then(data => {
      const episodeList = data.data._embedded.episodes
      setObj(episodeList)
    })
  }, [])
  
  const onClick = () => {
    console.log(apiData);
    console.log("Clicked!")
    console.log(apiData[0])
    //console.log(getEpisode(0))
    //console.log(episodeListParse(getEpisode(0)))
  }

  const getEpisode = (episode) => {
    return apiData.data._embedded.episodes[episode]
  }

  const episodeListParse = (episode) => {
    return 'S'+episode.season+' '+'E'+episode.number+' '+episode.name+' '+episode.airdate
  }

//{apiData.data._embedded.episodes[0].name}
  return (
    <>
    <div className="App">
      
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h1>Big Bang Theory Episode Directory <img src={logo} alt="Imagine the show's logo here"/></h1>
          </div>
        </div>
      </div>

      <p className='data'>bruh</p>

      <br></br>
      <Button onClick={onClick}>Update Data</Button>
    </div>

    </>
  );
}

export default App;
