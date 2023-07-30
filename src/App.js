import "./App.css";
import { AboutUs, Header } from "./containers";
import { Navbar } from "./components";
import SpecialMenu from "./containers/Menu/SpecialMenu";
import Chef from "./containers/Chef/Chef";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
    </div>
  );
}

export default App;
