import { useEffect, useState } from "react";
import Characters from "./Components/Characters";
import "./index";
import "./App.css";

export default function App() {
  const url = "https://rickandmortyapi.com/api/character/";
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      });
  }, []);

  console.log(characters);

  return (
    <div>
      <h1>Rick and Morty</h1>
      <Characters characters={characters} />
    </div>
  );
}

///previous code
/*{characters.length > 0 ? 
        (
          <ul>
            { characters.map(( characters, i ) => <li key={i}>{characters.name}</li>) }
          </ul>
        )
        : <p>Loading...</p>
      }
 
*/

//import Pages from './Components/Pages';

/*import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Characters from "./Components/Characters";
import Pages from "./Components/Pages";

function App() {
  const [characters, setCharacters] = useState([]);

  const [info, setInfo] = useState({});

  //const [showPop, setShowPop] = useState(false);

  //const [modal, setModal] = useState(false);

  const initialUrl = "https://rickandmortyapi.com/api/character";

  function fetchCharacters(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  }

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty" />

      <div className="container mt-5">
        <Characters characters={characters} />

        <Pages
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
*/
