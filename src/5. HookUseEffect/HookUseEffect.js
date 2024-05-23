import { useState, useEffect } from "react";

// Without useEffect.
// function PokemonDataComponent() {
//   async function fetchData() {
//     const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
//     const response = await fetch(url);
//     const pokemonData = await response.json();
//     const { name, height } = pokemonData;
//   }
//   fetchData();

//   return (
//     <>
//       <h3>PokemonDataComponent!!</h3>
//       {name}
//     </>
//   );
// }

// export default PokemonDataComponent;

// With useEffect.
function PokemonDataComponent() {
  const [name, setName] = useState();

  useEffect(() => {
    async function fetchData() {
      const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
      const response = await fetch(url);
      const pokemonData = await response.json();
      const { name } = pokemonData;
      setName(name);
    }
    fetchData();
  }, []);

  return (
    <>
      <h3>PokemonDataComponent!!</h3>
      <p>
        Name of pokemon: <strong>{name}</strong>
      </p>
    </>
  );
}

export default PokemonDataComponent;
