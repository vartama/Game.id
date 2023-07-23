import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CLEAR_STATE } from "../actions/actionType";
import { genreAddMiddleware } from "../actions/actionCreator";
import GenreForm from "../component/GenreForm";


const AddGenrePage = () => {
  const { newGenre } = useSelector((state) => state.addGenre);

  let [genreData, setGenreData] = useState({
    name: "",
  });

  const formHandler = (event) => {
    setGenreData({
      ...genreData,
      [event.target.name]: event.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(genreAddMiddleware(genreData));
  };

  useEffect(() => {
    if (Object.keys(newGenre).length > 0) {
      toast.success("New genre added");
      navigate("/genre");
    }
  }, [newGenre]);

  // ERROR HANDLER
  const notify = (msg) => toast.error(msg);
  const { errorMessage } = useSelector((state) => state.addGenre);

  useEffect(() => {
    if (errorMessage) {
      if (typeof errorMessage === "object")
        errorMessage.forEach((err) => notify(err));
      else notify(errorMessage);
    }
  }, [errorMessage]);

  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_STATE });
    };
  }, []);

  return (
    <>
        <GenreForm formHandler={formHandler} submitForm={submitForm} />
    </>
  )
};

export default AddGenrePage;
