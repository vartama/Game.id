import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CLEAR_STATE } from "../actions/actionType";
import { toast } from "react-toastify";
import { addGameMiddleware } from "../actions/actionCreator";
import GameForm from "../component/GameForm";

const AddGame = () => {
  const { newGame } = useSelector((state) => state.addGame);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notifySuccess = () => toast.success("New movie added");

  let [gameData, setGameData] = useState({
    name: '', 
    description: '', 
    price: '', 
    categoryId: '', 
    mainImg: '', 
  })

  let [images, setImages] = useState([
    {
        imgUrl: ''
    }
  ])

  const formHandler = (event) => {
    setGameData({
      ...gameData,
      [event.target.name]: event.target.value
    });
  };
  
  const handleImageChange = (event, index) => {
    let updatedImages = [...images];
    updatedImages[index][event.target.name] = event.target.value;
    setImages(updatedImages);
  };

  const addImage = (event) => {
    event.preventDefault()
    if (images.length < 5) {
        let imagefield = { imgUrl: '' }
        setImages([...images, imagefield])
    }
  }

  const submitForm = async (event) => {
    event.preventDefault();
    let sendDataGame = { ...gameData };
    let sendImagesGame = images.map((image) => ({ imgUrl: image.imgUrl }));
    
    sendDataGame.images = sendImagesGame;
    dispatch(addGameMiddleware(sendDataGame));
  };

  useEffect(() => {
    if (Object.keys(newGame).length > 0) {
      notifySuccess();
      navigate("/");
    }
  }, [newGame]);

  // ERROR HANDLER
  const notify = (msg) => toast.error(msg);
  const { errorMessage } = useSelector((state) => state.addGame);

  useEffect(() => {
    if (errorMessage) {
      if (typeof errorMessage === "object")
        errorMessage.forEach((err) => notify(err));
      else notify(errorMessage);
    }
  }, [errorMessage]);

  // CLEAR STATE
  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_STATE });
    };
  }, []);

  return (
    <>
        <GameForm 
            formHandler={formHandler}
            submitForm={submitForm}
            handleImageChange={handleImageChange}
            imagesInput={images}
            addImage={addImage}
        />
    </>
  )
};

export default AddGame;
