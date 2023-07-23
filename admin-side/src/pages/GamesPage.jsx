import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteGameMiddleware, fetchGames } from "../actions/actionCreator";
import {toast} from "react-toastify"

const GamesPage = () => {
  const { games } = useSelector((state) => state.games);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editHandler = (id) => {
    navigate(`/editGame/${id}`);
  };

  const deleteHandler = (id) => {
    dispatch(deleteGameMiddleware(id));
    toast.success("Genre Deleted");
  };

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  console.log(games, "line 14 product page");

  return (
    <section className="px-4">
      <NavLink to={"/addGame"}>
        <button className="btn btn-accent">Add Game</button>
      </NavLink>
      <table className="table table-xs">
        <thead>
          <tr>
            <th>No</th>
            <th>Image Product</th>
            <th>Name</th>
            <th>Genre</th>
            <th>Pricec</th>
            <th>Created by</th>
            <th>Show Images</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, i) => (
            <tr key={game.id}>
              <td>{i + 1}</td>
              <td>
                {" "}
                <img
                  width={300}
                  height={200}
                  src={game.mainImg}
                  alt=""
                  srcSet=""
                />
              </td>
              <td>{game.name}</td>
              <td>{game.Category.name}</td>
              <td>{game.price}</td>
              <td>{game.User.username}</td>
              <td>show Image</td>
              <td>
                  <ul>
                    <button className="btn rounded-full bg-yellow-100" onClick={() => editHandler(game.id)}>
                      Edit
                    </button>
                  </ul>
                  <ul>
                    <button className="btn rounded-full bg-red-400" onClick={() => deleteHandler(game.id)}>
                      Delete
                    </button>
                  </ul>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default GamesPage;
