import logo from './logo.svg';
import './App.css';

function App() {
    let jsondata;    
    console.log (jsondata)
    fetch('https://us-central1-big-bang-theory-25fd5.cloudfunctions.net/bbt361642/bbt/episodes').then(
            function(u){ return u.json();}
          ).then(
            function(json){
              jsondata = json;
            }
          )

    console.log(jsondata)

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
