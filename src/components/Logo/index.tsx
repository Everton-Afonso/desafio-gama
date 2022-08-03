import LogoPokemon from "../../assets/img/pokemon-logo.png";

import "./styles.scss";

const Logo = () => {
  return (
    <img className="navbar-pokemon-logo" src={LogoPokemon} alt="Logo pokemon" />
  );
};

export default Logo;
