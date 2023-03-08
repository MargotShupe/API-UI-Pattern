import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Characters from "./Components/Characters";
import Pages from "./Components/Pages";
//import { Modals } from "./Components/Modals";

function App() {
  const [characters, setCharacters] = useState([]);

  const [info, setInfo] = useState({});

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
