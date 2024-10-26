import { useEffect, useState } from "react";

const Players = () => {
  const [view, setView] = useState("available");
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1>
            {view === "available"
              ? "Available"
              : `Selected(${selectedPlayers.length}/6)`}
          </h1>
        </div>
        <div className="flex">
          <button
            onClick={() => setView("available")}
            className={`${
              view === "available" ? "bg-blue-500" : "bg-gray-200"
            } px-4 p-2 rounded-l-lg`}
          >
            Available
          </button>
          <button
            onClick={() => setView("selected")}
            className={`${
              view === "selected" ? "bg-blue-500" : "bg-gray-200"
            } px-4 p-2 rounded-r-lg`}
          >
            Selected
          </button>
        </div>
      </div>
      <div>
        {view === "available" ? (
          <Available players={players} />
        ) : (
          <Selected selectedPlayers={selectedPlayers} />
        )}
      </div>
    </div>
  );
};

const Available = ({ players }) => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            players.map(player => )
      }
  </div>;
};

const Selected = ({ selectedPlayers }) => {
  return (
    <div>
      <h1>Selected: {selectedPlayers.length}</h1>
    </div>
  );
};

export default Players;
