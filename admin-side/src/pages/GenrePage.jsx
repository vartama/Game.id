import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { genreDeleteMiddleware } from "../actions/actionCreator";
import { toast } from "react-toastify";
import { genreMiddleware } from "../actions/actionCreator";
import { CLEAR_STATE } from "../actions/actionType";

const GenrePage = () => {
  const { genres } = useSelector((state) => state.genres);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editHandler = (id) => {
    navigate(`/editGenre/${id}`);
  };

  const deleteHandler = (id) => {
    dispatch(genreDeleteMiddleware(id));
    toast.success("Genre Deleted");
  };

  useEffect(() => {
    dispatch(genreMiddleware());
  }, []);

  // ERROR HANDLER
  const notify = (msg) => toast.error(msg);
  const { errorMessage } = useSelector((state) => state.editGenre);

  useEffect(() => {
    if (errorMessage) {
      notify(errorMessage);
    }
  }, [errorMessage]);

  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_STATE });
    };
  }, []);

  return (
    <section>
      <section className="px-4">
        <NavLink to={"/addGenre"}>
          <button className="btn btn-accent">Add Genre</button>
        </NavLink>
        <table className="table table-xs">
          <thead>
            <tr>
              <th>No</th>
              <th>Name Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {genres.map((genre, i) => (
              <tr key={genre.id}>
                <td>{i + 1}</td>
                <td>{genre.name}</td>
                <td>
                  <ul>
                    <button className="btn rounded-full bg-yellow-100" onClick={() => editHandler(genre.id)}>
                      Edit
                    </button>
                  </ul>
                  <ul>
                    <button className="btn rounded-full bg-red-400" onClick={() => deleteHandler(genre.id)}>
                      Delete
                    </button>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default GenrePage;
