import { PokemonResult, usePokemonList } from "../../contexts/context";

import "./styles.scss";

const Cards: React.FC<{
  pokemon: PokemonResult;
  pushToCart: any;
}> = ({ pokemon, pushToCart }) => {
  const { handleFormatPrice } = usePokemonList();
  let imgPokemon = pokemon.sprites.front_default;

  return (
    <section className="card-container">
      <div className="card-content">
        <div className="card-id">
          <p>{`#${pokemon.id}`}</p>
        </div>

        <section className="card-description-pokemon">
          <div>
            <img src={imgPokemon} alt={`${pokemon.name} image`} />
          </div>

          <div className="card-description">
            <h3>{pokemon.name}</h3>
            <p>{handleFormatPrice(pokemon.price)}</p>

            <div className="card-button-add">
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
