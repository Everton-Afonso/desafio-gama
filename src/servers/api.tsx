import axios from "axios";

export type ApiData = {
  name: string;
  url: string;
};

export const apiPokemons = async () => {
  const api = await axios
    .get("https://pokeapi.co/api/v2/pokemon");

    return api;
};

export const GetPokemonChar = async (pokemon: ApiData) => {
  const response = await axios.get(pokemon.url);
  const price = response.data.height + response.data.weight;
  return { ...response.data, price, qnt: 0 };
};