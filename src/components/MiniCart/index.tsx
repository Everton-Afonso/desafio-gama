import MiniCartLogo from "../../assets/svg/shopping-cart-icon.svg";
import { PokemonCartItem, usePokemonList } from "../../contexts/context";
import Sidebar from "../Sidebar";
import "./styles.scss";

const MiniCart: React.FC<{ pokemonCart: PokemonCartItem[] }> = ({
  pokemonCart,
}) => {
  const {
    isCloseMiniCart,
    setIsCloseMiniCart,
    handlePushAddCart,
    handleDeleteFromCart,
  } = usePokemonList();

  const totalItemsCart = pokemonCart
    .map((item) => item.qnt)
    .reduce((totalItems, item) => totalItems + item, 0);

  const handleShowSidebar = () => {
    setIsCloseMiniCart(!isCloseMiniCart);
  };

  return (
    <>
      <div className="navbar-mini-cart" onClick={handleShowSidebar}>
        <button>
          <div className="navbar--min-cart-quantity">
            <p>{totalItemsCart === 0 ? "" : totalItemsCart}</p>
          </div>
          <img src={MiniCartLogo} alt="Carrinho de compras" />
        </button>
      </div>

      <Sidebar
        pokemonCart={pokemonCart}
        pushToCart={handlePushAddCart}
        deleteFromCart={handleDeleteFromCart}
      />
    </>
  );
};

export default MiniCart;
