import { ChildrenTypes, PokemonListProvider } from "./context";

export const GlobalContext = ({ children }: ChildrenTypes) => {
  return <PokemonListProvider>{children}</PokemonListProvider>;
};
