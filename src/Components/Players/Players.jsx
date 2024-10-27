import { useEffect, useState } from "react";
import Player from "../Player/Player";
import PropType from "prop-types";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const Players = ({ coin, minusCoin, removedPlayerCoinAdd, Toast }) => {
  const [view, setView] = useState("available");
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const addSelectedPlayer = (player) => {
    if (
      selectedPlayers.length < 6 &&
      !selectedPlayers.includes(player) &&
      coin >= player.price
    ) {
      setSelectedPlayers([...selectedPlayers, player]);
      minusCoin(parseFloat(player.price));
      Toast(`Congrates !! ${player.name} is now in your squad!`, "success");
    } else {
      if (coin < player.price) {
        Toast(
          "Not enough money to buy this player.Claim some Free Credit!",
          "error"
        );
      } else if (selectedPlayers.length == 6) {
        Toast("6 players added already! You can't add more players!", "error");
      } else {
        Toast(`Player (${player.name}) is already added!`, "error");
      }
    }
  };

  const removeSelectedPlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter((p) => p.id !== player.id));
    removedPlayerCoinAdd(parseFloat(player.price), player);
  };

  return (
    <div className="container mx-auto mb-10 pb-60">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h1 className="font-bold text-xl lg:text-3xl">
            {view === "available"
              ? "Available"
              : `Selected(${selectedPlayers.length}/6)`}
          </h1>
        </div>
        <div className="flex">
          <button
            onClick={() => setView("available")}
            className={`${
              view === "available"
                ? "bg-gradient-to-r from-sky-400 to bg-yellow-400"
                : "bg-gray-200"
            } px-3 sm:px-5 p-2 sm:p-3 rounded-l-lg text font-bold`}
          >
            Available
          </button>
          <button
            onClick={() => setView("selected")}
            className={`${
              view === "selected"
                ? "bg-gradient-to-r from-sky-400 to bg-yellow-400"
                : "bg-gray-200"
            } px-3 sm:px-5 p-2 sm:p-3 rounded-r-lg font-bold`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      <div>
        {view === "available" ? (
          <Available players={players} addSelectedPlayer={addSelectedPlayer} />
        ) : (
          <Selected
            selectedPlayers={selectedPlayers}
            removeSelectedPlayer={removeSelectedPlayer}
            setView={setView}
          />
        )}
      </div>
    </div>
  );
};

const Available = ({ players, addSelectedPlayer }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
      {players.map((player) => (
        <Player
          key={player.id}
          player={player}
          addSelectedPlayer={addSelectedPlayer}
        ></Player>
      ))}
    </div>
  );
};

const Selected = ({ selectedPlayers, removeSelectedPlayer, setView }) => {
  return (
    <div>
      {selectedPlayers.map((player) => (
        <SelectedPlayer
          key={player.id}
          player={player}
          removeSelectedPlayer={removeSelectedPlayer}
        ></SelectedPlayer>
      ))}
      <button
        onClick={() => setView("available")}
        className="px-4 py-2 text-lg font-bold bg-[#E7FE29] rounded-lg mb-3"
      >
        Add More Player
      </button>
    </div>
  );
};

Players.propTypes = {
  players: PropType.array,
  selectedPlayers: PropType.array,
  minusCoin: PropType.func,
  removedPlayerCoinAdd: PropType.func,
  coin: PropType.number,
  Toast: PropType.func,
};

Available.propTypes = {
  players: PropType.array,
  addSelectedPlayer: PropType.func,
};

Selected.propTypes = {
  selectedPlayers: PropType.array,
  removeSelectedPlayer: PropType.func,
  setView: PropType.func,
};

export default Players;
