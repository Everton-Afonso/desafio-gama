import Logo from "../Logo";
import MiniCart from "../MiniCart";
import SearchContainer from "../SearchContainer";
import Sidebar from "../Sidebar";

import "./styles.scss";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <Logo />
        <SearchContainer />
        <MiniCart />
      </div>

      <Sidebar />
    </header>
  );
};

export default Header;
