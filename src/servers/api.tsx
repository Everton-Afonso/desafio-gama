import axios from "axios";

export interface GetPokemonProps {
  name: string;
  url: string;
}

export interface ApiMeta {
  count: number;
  previous: string;
  next: string;
}

export const GetApiPokemons = async (offset: number, limit: number) => {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  return res;
};

export const GetPokemon = async (pokemon: GetPokemonProps) => {
  const res = await axios.get(pokemon.url);
  const price = res.data.height + res.data.weight;
  return { ...res.data, price, qnt: 0 };
};
