import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";
import PropType from "prop-types";
import { useState } from "react";
import { Flip } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [coin, setCoin] = useState(0);
  const Toast = (message, type) => {
    const position = type === "warning" ? "top-right" : "top-center";
    toast[type](message, {
      position: position,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
      toastClassName: "rounded-lg bg-[#f5f5f5] text-black w-96",
      bodyClassName: "font-medium text-lg",
    });
  };
  const addCoin = (newCoin) => {
    setCoin(coin + newCoin);
    Toast("Credit Added to your Account!", "success");
  };
  const minusCoin = (newCoin) => {
    setCoin(coin - newCoin);
  };

  const removedPlayerCoinAdd = (newCoin,player) => {
    setCoin(coin + newCoin);
    Toast(`Player (${player.name}) removed!`, "warning");
  };

  return (
    <div className="space-y-10">
      <ToastContainer />
      <NavBar coin={coin}></NavBar>
      <Banner addCoin={addCoin}></Banner>
      <Players
        removedPlayerCoinAdd={removedPlayerCoinAdd}
        minusCoin={minusCoin}
        coin={coin}
        Toast={Toast}
      ></Players>
      {/* <Toastify></Toastify> */}
      {/* <Subscribe></Subscribe> */}
      <Footer></Footer>
    </div>
  );
}

App.prototype = {
  coin: PropType.number.isRequired,
  setCoin: PropType.func.isRequired,
};

export default App;
