import { usePokemonList } from "../../contexts/context";

import MiniCart from "./MiniCart";
import MiniCarIcon from "./MiniCarIcon";
import Logo from "./Logo";
import SearchContainer from "./SearchContainer";

import "./styles.scss";

const Sidebar = () => {
  const { pokemonCart } = usePokemonList();

  return (
    <header className="sidebar_container">
      <div className="sidebar_content">
        <Logo />
        <SearchContainer />
        <MiniCarIcon qtdPokemon={pokemonCart} />
        <MiniCart pokemonCart={pokemonCart} />
      </div>
    </header>
  );
};

export default Sidebar;
