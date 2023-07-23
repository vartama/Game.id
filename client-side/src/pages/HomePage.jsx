import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGames } from "../actions/actionCreator";

const Homepage = () => {
  const { games } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  console.log(games);
  return (
    <>
      <div className="flex flex-row">
        {games.map((game) => (
          <div
            className="flex card card-compact w-96 bg-base-100 shadow-xl px-4 py-4 mx-6 my-4"
            key={game.id}
          >
            <img src={game.Images[0].imgUrl} />
            <h1>{game.name}</h1>
            <NavLink 
              to={`/customer/${game.id}`}
              className="btn btn-accen"
            >See Detail</NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default Homepage;
