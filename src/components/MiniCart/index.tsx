import { useContext, useState } from "react";
import MiniCartLogo from "../../assets/svg/shopping-cart-icon.svg";
import { CartContext } from "../../contexts";

import "./styles.scss";

const MiniCart = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(CartContext);
  const [cartQuantity, setCartQuantity] = useState<number>(1);

  const handleShowSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="navbar-mini-cart" onClick={handleShowSidebar}>
        <button>
          <div className="navbar--min-cart-quantity">
            <p>{cartQuantity > 0 && cartQuantity }</p>
          </div>
          <img src={MiniCartLogo} alt="Carrinho de compras" />
        </button>
      </div>
    </>
  );
};

export default MiniCart;
