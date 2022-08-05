import { GlobalContext } from "./contexts";
import Header from "./components/Header";
import ListCards from "./components/ListCards";

import "./styles/global.scss";

function App() {
  return (
    <GlobalContext>
      <div className="App">
        <Header />
        <ListCards />
      </div>
    </GlobalContext>
  );
}

export default App;
