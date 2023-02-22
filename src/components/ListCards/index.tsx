import { PokemonResult, usePokemonList } from "../../contexts/context";
import Cards from "./Cards";

import "./styles.scss";

const ListCards = () => {
  const { pokemonList, handlePushAddCart } = usePokemonList();

  return (
    <section className="list_cards_container">
      {pokemonList.map((pokemon: PokemonResult) => {
        return (
          <Cards
            key={pokemon.id}
            pokemon={pokemon}
            pushToCart={handlePushAddCart}
          />
        );
      })}
    </section>
  );
};

export default ListCards;
