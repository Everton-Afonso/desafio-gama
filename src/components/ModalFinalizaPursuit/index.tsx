import { usePokemonList } from "../../contexts/context";

import "./styles.scss";

const ModalFinalizaPursuit = () => {
  const {
    isCloseModal,
    setIsCloseModal,
    isCloseMiniCart,
    setIsCloseMiniCart,
    handleCleanCart,
  } = usePokemonList();

  const handleClose = () => {
    setIsCloseModal(!isCloseModal);
    setIsCloseMiniCart(!isCloseMiniCart);
    handleCleanCart();
  };

  return (
    <>
      {isCloseModal ? (
        <section className="modal-finaliza-pursuit">
          <div className="modal">
            <h3>Obrigado por sua compra</h3>

            <button onClick={handleClose}>Fechar</button>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ModalFinalizaPursuit;
