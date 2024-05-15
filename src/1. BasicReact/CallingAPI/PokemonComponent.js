import { useEffect, useState } from "react";

function PokemonComponent() {
  console.log("pokemon component start!!");
  const [pokemonName, setPokemonName] = useState("");

  // useEffect guarantees that it will run after the UI has rendered.
  useEffect(() => {
    console.log("Inside useEffect!!");
    async function fetchPokemon() {
      const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
      const response = await fetch(url);
      const pokemonData = await response.json();
      const { name } = pokemonData;
      setPokemonName(name);
    }

    fetchPokemon(); // e.g. This might take 15 seconds to execute and while it is running there would
    // be nothing on the screen. Screen would be complete white, which is not a good experience for any USER.
    // That is the reason why we need some sort of mechanism which makes sure
    // that we do any so called "EFFECTS" thing only after rendering basic UI.
    // And that mechanism is nothing but "useEffect()".
  }, [pokemonName]);

  return (
    <>
      {console.log("Inside the UI")}
      <h3>Pokemon Component!!</h3>
      {pokemonName}
    </>
  );
}

export default PokemonComponent;

// EFFECTS in React -> calling an API, calling LocalStorage, etc.
