import "./App.css";
import { AboutUs, Header } from "./containers";
import { Navbar } from "./components";
import SpecialMenu from "./containers/Menu/SpecialMenu";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
    </div>
  );
}

export default App;
