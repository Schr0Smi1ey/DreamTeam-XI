import { IoPersonSharp } from "react-icons/io5";
import { TiFlag } from "react-icons/ti";
import PropType from "prop-types";

const Player = ({ player, addSelectedPlayer }) => {
  const { name, country, role, rating, batHand, price, img, bowlHand } = player;
  return (
    <div className="p-4 space-y-3 border-2 border-gray-400 rounded-2xl border-opacity-50">
      <div>
        <img
          src={img}
          alt=""
          className="w-[300px] h-[300px] object-cover rounded-full mx-auto"
        />
      </div>
      <div className="flex gap-3 items-center text-2xl font-semibold">
        <span>
          <IoPersonSharp />
        </span>
        <span>{name}</span>
      </div>
      <hr />
      <div className="flex justify-between font-medium text-lg">
        <div className="flex gap-3 items-center text-[#575656]">
          <span className="text-[#131313]">
            <TiFlag />
          </span>
          <span className="font-normal">{country}</span>
        </div>
        <div className="px-3 py-2 bg-gray-200 shadow-lg rounded-lg">{role}</div>
      </div>
      <div className="font-bold space-y-2 text-lg">
        <div className="flex justify-between">
          <h1>Rating</h1>
          <h3 className="font-medium text-[#575656]">{rating}</h3>
        </div>
        <div className="flex justify-between">
          <h1>{batHand}</h1>
          <h3 className="font-medium text-[#575656] text-right">{bowlHand}</h3>
        </div>
        <div className="flex justify-between">
          <h1>price</h1>
          <h3>${price}</h3>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => addSelectedPlayer(player)}
          className="font-semibold text-lg shadow-lg border-2 border-gray-300 w-full p-2 rounded-lg hover:bg-gradient-to-r hover:from-sky-400 hover:to-yellow-400"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropType.object,
  addSelectedPlayer: PropType.func,
  coin: PropType.number,
};

export default Player;
