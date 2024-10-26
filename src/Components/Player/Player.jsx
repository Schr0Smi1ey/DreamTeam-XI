import { IoPersonSharp } from "react-icons/io5";
import { TiFlag } from "react-icons/ti";

const Player = ({ player }) => {
  const { name, country, role, rating, batHand, price, img } = player;
  return (
    <div className="p-4">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <span>
          <IoPersonSharp />
        </span>
        <span>{name}</span>
      </div>
      <div>
        <div>
          <span>
            <TiFlag />
          </span>
          <span>{country}</span>
        </div>
        <div>{role}</div>
      </div>
      <div>
        <div>
          <h1>Rating</h1>
          <h3>{rating}</h3>
        </div>
        <div>
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default Player;
