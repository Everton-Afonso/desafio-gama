import { PokemonCartItem, usePokemonList } from "../../../../contexts/context";

import Delete from "../../assets/svg/delete.svg";

import "./styles.scss";

const CardsProductsMiniCart: React.FC<{ pokemonCart: PokemonCartItem[] }> = ({
  pokemonCart,
}) => {
  const { handleDeleteFromCart, handleFormatPrice, handlePushAddCart } =
    usePokemonList();

  const totalItemsCart = pokemonCart
    .map((item) => item.price * item.qnt)
    .reduce((before, after) => before + after, 0);

  const handleCheckAmount = (item: PokemonCartItem) => {
    item.qnt === 0 && handleDeleteFromCart(item);
  };

  return (
    <>
      {pokemonCart.map((item) => {
        handleCheckAmount(item);

        return (
          <section
            className="cards_products__mini_cart_information"
            key={item.id}
          >
            <div className="cards_products__mini_cart_information_descriptions">
              <div className="cards_products__mini_cart_descriptions">
                <img src={item.image} alt={`${item.name}`} />

                <div className="descriptions">
                  <h3>{item.name}</h3>
                  <p>
                    {" "}
                    Total:
                    {handleFormatPrice(item.price * item.qnt)}
                  </p>

                  <div className="cards_products__mini_cart_push_remove">
                    <button onClick={() => handlePushAddCart(item, -1)}>
                      -
                    </button>

                    <span>{item.qnt}</span>

                    <button onClick={() => handlePushAddCart(item, 1)}>
                      +
                    </button>
                  </div>
                </div>

                <button onClick={() => handleDeleteFromCart(item)}>
                  <img src={Delete} alt="Delete" />
                </button>
              </div>
            </div>
          </section>
        );
      })}

      <section className="finalize_purchase">
        <div className="total_payable">
          <h3>Total:</h3>
          <span>{handleFormatPrice(totalItemsCart)}</span>
        </div>
        <button>Finalizar Compra</button>
      </section>
    </>
  );
};

export default CardsProductsMiniCart;
