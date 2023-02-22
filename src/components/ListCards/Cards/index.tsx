import { PokemonResult, usePokemonList } from "../../../contexts/context";

import "./styles.scss";

const Cards: React.FC<{
  pokemon: PokemonResult;
  pushToCart: any;
}> = ({ pokemon, pushToCart }) => {
  const { handleFormatPrice } = usePokemonList();
  let imgPokemon = pokemon.sprites.front_default;

  return (
    <section className="card_container">
      <div className="card_content">
        <div className="card_id">
          <p>{`#${pokemon.id}`}</p>
        </div>

        <section className="card_description_pokemon">
          <div>
            <img src={imgPokemon} alt={`${pokemon.name}`} />
          </div>

          <div className="card_description">
            <h3>{pokemon.name}</h3>
            <p>{handleFormatPrice(pokemon.price)}</p>

            <div className="card_button_add">
              <button
                onClick={() => {
                  pushToCart(pokemon, 1);
                }}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Cards;
