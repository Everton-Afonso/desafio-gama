import { useContext } from "react";
import { CartContext } from "../../contexts";
import Close from "../../assets/svg/close.svg";
import ShoppingBag from "../../assets/img/sacola-de-compras.png";

import "./styles.scss";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(CartContext);
  const id: string = "sidebar-modal-close";

  const handleCloseSidebar = (e: React.MouseEvent<Element, MouseEvent>) => {
    const event = e.target as HTMLElement;

    if (event.id === id) {
      setIsSidebarOpen(false);
    }
  };
  return (
    <>
      {isSidebarOpen ? (
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
                onClick={() => setIsSidebarOpen(false)}
              />
            </button>

            <div className="sidebar-information">
              <img src={ShoppingBag} alt="Sacola de compras" />
              
              <p>Seu carrinho esta vazio</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Sidebar;
