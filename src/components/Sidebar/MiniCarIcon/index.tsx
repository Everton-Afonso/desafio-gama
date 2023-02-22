import React from "react";
import { PokemonCartItem, usePokemonList } from "../../../contexts/context";

import MiniCartLogo from "../assets/svg/shopping-cart-icon.svg";

import "./styles.scss";

const MiniCarIcon: React.FC<{ qtdPokemon: PokemonCartItem[] }> = ({
  qtdPokemon,
}) => {
  const { handlerCloseMiniCart } = usePokemonList();

  const totalItemsCart = qtdPokemon
    .map((item) => item.qnt)
    .reduce((totalItems, item) => totalItems + item, 0);

  return (
    <div className="mini_cart_icon-container">
      <button onClick={handlerCloseMiniCart}>
        <div className="mini_cart_icon-quantity">
          <p>{totalItemsCart === 0 ? "" : totalItemsCart}</p>
        </div>
        <img src={MiniCartLogo} alt="Carrinho de compras" />
      </button>
    </div>
  );
};

export default MiniCarIcon;
