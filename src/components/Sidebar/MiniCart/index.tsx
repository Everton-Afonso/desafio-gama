import { PokemonCartItem, usePokemonList } from "../../../contexts/context";

import CardsProductsMiniCart from "./CardsProductsMiniCart";

import Close from "../assets/svg/close.svg";
import ShoppingBag from "../assets/img/sacola-de-compras.png";

import "./styles.scss";

const MiniCart: React.FC<{ pokemonCart: PokemonCartItem[] }> = ({
  pokemonCart,
}) => {
  const { isCloseMiniCart, handlerCloseMiniCart } = usePokemonList();

  return (
    <>
      <div
        className={`mini_cart_overlay ${
          isCloseMiniCart ? "mini_cart_overlay_show" : "mini_cart_overlay_hide"
        }`}
        onClick={handlerCloseMiniCart}
      ></div>

      <div
        className={`mini_cart_content ${
          isCloseMiniCart ? "mini_cart_open" : "mini_cart_close"
        }`}
      >
        <div className="min_cart_btn_close">
          <button onClick={handlerCloseMiniCart}>
            <img src={Close} alt="close" />
          </button>
        </div>

        {pokemonCart.length === 0 ? (
          <div className="min_cart_shopping_bag">
            <img src={ShoppingBag} alt="Sacola de compras" />

            <p>Seu carrinho esta vazio</p>
          </div>
        ) : (
          <CardsProductsMiniCart pokemonCart={pokemonCart} />
        )}
      </div>
    </>
  );
};

export default MiniCart;
