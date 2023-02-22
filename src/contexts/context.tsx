import { createContext, useContext, useEffect, useState } from "react";
import { ApiMeta, GetApiPokemons, GetPokemon } from "../servers/api";

export interface PokemonResult {
  id: number;
  name: string;
  price: number;
  qnt: number;
  sprites: { front_default: string };
  base_experience: number;
  weight: number;
  height: number;
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string };
  };
  types: {
    type: {
      name: string;
    };
  };
}

export interface PokemonCartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  qnt: number;
}

export interface ChildrenTypes {
  children: JSX.Element | JSX.Element[];
}

export const PokemonListContext = createContext({} as any);

const PokemonListProvider = ({ children }: ChildrenTypes) => {
  const [isCloseMiniCart, setIsCloseMiniCart] = useState<boolean>(false);
  const [isCloseModal, setIsCloseModal] = useState<boolean>(false);
  const [pokemonList, setPokemonList] = useState<PokemonResult[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [apiMeta, setApiMeta] = useState<ApiMeta | null>(null);
  const limit: number = 20;

  const getStorage: string | null = localStorage.getItem("pokemonCart") || "";
  let initialCart: PokemonCartItem[] =
    getStorage !== "" ? JSON.parse(getStorage) : [];

  const [pokemonCart, setPokemonCart] =
    useState<PokemonCartItem[]>(initialCart);

  const handlePushAddCart = (pokemon: PokemonResult, qnt: number) => {
    for (let i = 0; i < pokemonCart.length; i++) {
      if (pokemonCart[i].id === pokemon.id) {
        const updateQnt =
          qnt < 0 && pokemonCart[i].qnt <= 0 ? 0 : pokemonCart[i].qnt + qnt;
        let newPokeCart: PokemonCartItem[] = pokemonCart;
        newPokeCart[i] = { ...pokemonCart[i], qnt: updateQnt };

        setPokemonCart((pokemonCart) => [...newPokeCart]);
        localStorage.setItem("pokemonCart", JSON.stringify(pokemonCart));
        return;
      }
    }

    const newPokeCart: PokemonCartItem[] = [
      ...pokemonCart,
      {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        price: pokemon.price,
        qnt: pokemon.qnt + 1,
      },
    ];

    setPokemonCart(newPokeCart);
    localStorage.setItem("pokemonCart", JSON.stringify(newPokeCart));
  };

  const handleCleanCart = () => {
    setPokemonCart([]);
    localStorage.removeItem("pokemonCart");
  };

  const handleDeleteFromCart = (pokemon: PokemonCartItem) => {
    const newPokeCart = pokemonCart.filter((item) => item.id !== pokemon.id);
    setPokemonCart(newPokeCart);
    localStorage.setItem("pokemonCart", JSON.stringify(newPokeCart));
  };

  const handleFormatPrice = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const handlerCloseMiniCart = () => {
    setIsCloseMiniCart(!isCloseMiniCart);
  };

  useEffect(() => {
    const getListPokemons = async () => {
      const {
        data: { count, next, previous, results },
      } = await GetApiPokemons(offset, limit);

      let listPokemon = [];

      for await (const pokemon of results) {
        const pokemonChar = await GetPokemon(pokemon);
        listPokemon.push(pokemonChar);
      }

      setApiMeta({ count, next, previous });
      setPokemonList(listPokemon);
    };

    getListPokemons();
  }, [offset]);

  return (
    <PokemonListContext.Provider
      value={{
        isCloseMiniCart,
        pokemonList,
        pokemonCart,
        handlePushAddCart,
        handleCleanCart,
        handleDeleteFromCart,
        handlerCloseMiniCart,
        handleFormatPrice,
        isCloseModal,
        setIsCloseModal,
      }}
    >
      {children}
    </PokemonListContext.Provider>
  );
};

const usePokemonList = () => useContext(PokemonListContext);

export { PokemonListProvider, usePokemonList };
