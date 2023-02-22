import { GlobalContext } from "./contexts";
import Sidebar from "./components/Sidebar";
import ListCards from "./components/ListCards";

import "./styles/global.scss";

function App() {
  return (
    <GlobalContext>
      <div className="App">
        <Sidebar />
        <ListCards />
      </div>
    </GlobalContext>
  );
}

export default App;
