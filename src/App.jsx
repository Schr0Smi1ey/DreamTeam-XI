import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";
import Subscribe from "./Components/Subscribe/Subscribe";

function App() {
  return (
    <div className="space-y-10">
      <NavBar></NavBar>
      <Banner></Banner>
      <Players></Players>
      {/* <Subscribe></Subscribe> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
