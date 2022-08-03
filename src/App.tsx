import { CartContextProvider } from "./contexts";
import Header from "./components/Header";

import "./styles/global.scss";

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Header />
      </div>
    </CartContextProvider>
  );
}

export default App;
