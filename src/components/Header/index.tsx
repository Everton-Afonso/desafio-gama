import { usePokemonList } from "../../contexts/context";
import Logo from "../Logo";
import MiniCart from "../MiniCart";
import SearchContainer from "../SearchContainer";

import "./styles.scss";

const Header = () => {
  const { pokemonCart } = usePokemonList();

  return (
    <header className="header-container">
      <div className="header-content">
        <Logo />
        <SearchContainer />
        <MiniCart pokemonCart={pokemonCart} />
      </div>
    </header>
  );
};

export default Header;
