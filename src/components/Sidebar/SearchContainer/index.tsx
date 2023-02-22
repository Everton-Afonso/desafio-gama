import Search from "../assets/svg/search.svg";

import "./styles.scss";

const SearchContainer = () => {
  return (
    <section className="navbar-search-container">
      <div className="navbar-search-content">
        <div className="navbar-search">
          <img src={Search} alt="Icone de busca" />

          <input type="text" placeholder="Busque um pokemon" />
        </div>
      </div>
    </section>
  );
};

export default SearchContainer;
