import { useState } from "react";
import { PokemonCartItem, usePokemonList } from "../../contexts/context";
import Close from "../../assets/svg/close.svg";
import ShoppingBag from "../../assets/img/sacola-de-compras.png";
import Delete from "../../assets/svg/delete.svg";

import "./styles.scss";
import ModalFinalizaPursuit from "../ModalFinalizaPursuit";

const Sidebar: React.FC<{
  pokemonCart: PokemonCartItem[];
  pushToCart: any;
  deleteFromCart: any;
}> = ({ pokemonCart, pushToCart, deleteFromCart }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const {
    isCloseMiniCart,
    setIsCloseMiniCart,
    handleFormatPrice,
    isCloseModal,
    setIsCloseModal,
  } = usePokemonList();
  const id: string = "sidebar-modal-close";

  const totalItemsCart = pokemonCart
    .map((item) => item.price * item.qnt)
    .reduce((before, after) => before + after, 0);

  const handleCloseSidebar = (e: React.MouseEvent<Element, MouseEvent>) => {
    const event = e.target as HTMLElement;

    if (event.id === id) {
      setIsCloseMiniCart(!isCloseMiniCart);
    }
  };

  const handleCheckAmount = (item: PokemonCartItem) => {
    item.qnt === 0 && deleteFromCart(item);
  };

  const handleClean = () => {
    setIsModalOpen(!isModalOpen);
    setIsCloseModal(!isCloseModal);
  };

  console.log(isCloseModal);

  return (
    <>
      {isCloseMiniCart ? (
        <section
          id={id}
          className="sidebar-container"
          onClick={handleCloseSidebar}
        >
          <div className="sidebar-content">
            <button className="sidebar-close">
              <img
                src={Close}
                alt="close"
                onClick={() => setIsCloseMiniCart(!isCloseMiniCart)}
              />
            </button>

            {pokemonCart.length === 0 ? (
              <div className="sidebar-shopping-bag">
                <img src={ShoppingBag} alt="Sacola de compras" />

                <p>Seu carrinho esta vazio</p>
              </div>
            ) : (
              <>
                {pokemonCart.map((item) => {
                  handleCheckAmount(item);

                  return (
                    <section className="sidebar-information" key={item.id}>
                      <div className="sidebar-information-descriptions">
                        <div className="sidebar-descriptions">
                          <img src={item.image} alt={`${item.name} image`} />

                          <div className="descriptions">
                            <h3>{item.name}</h3>
                            <p>
                              {" "}
                              Total:
                              {handleFormatPrice(item.price * item.qnt)}
                            </p>

                            <div className="sidebar-push-remove">
                              <button onClick={() => pushToCart(item, -1)}>
                                -
                              </button>

                              <span>{item.qnt}</span>

                              <button onClick={() => pushToCart(item, 1)}>
                                +
                              </button>
                            </div>
                          </div>

                          <button onClick={() => deleteFromCart(item)}>
                            <img src={Delete} alt="Delete" />
                          </button>
                        </div>
                      </div>
                    </section>
                  );
                })}

                <section className="finalize-purchase">
                  <div className="total-payable">
                    <h3>Total:</h3>
                    <span>{handleFormatPrice(totalItemsCart)}</span>
                  </div>
                  <button onClick={handleClean}>Finalizar Compra</button>
                </section>
              </>
            )}
          </div>
        </section>
      ) : null}

      <ModalFinalizaPursuit />
    </>
  );
};

export default Sidebar;
