import "./App.css";
import { AboutUs, Header } from "./containers";
import { Navbar } from "./components";
import SpecialMenu from "./containers/Menu/SpecialMenu";
import Chef from "./containers/Chef/Chef";
import Laurels from "./containers/Laurels/Laurels";
import Gallery from "./containers/Gallery/Gallery";
import FindUs from "./containers/FindUs/FindUs";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Laurels />
      <Gallery />
      <FindUs />
    </div>
  );
}

export default App;
