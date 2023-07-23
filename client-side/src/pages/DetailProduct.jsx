import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchDetailGame } from "../actions/actionCreator";
import { useParams, NavLink } from "react-router-dom";
import Slider from "react-slick";

const Detailgame = () => {
  const { id } = useParams();
  const { game } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    dispatch(fetchDetailGame(id));
  }, []);

  console.log(game);
  return (
    <>
      {/* {JSON.stringify(game)} */}
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden py-5">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          {game.name}
        </h2>
        <div className="w-400px carousel rounded-box py-2">
          {game.Images?.map((image) => (
            <div className="carousel-item w-full">
              <img
                key={image.id}
                src={image.imgUrl}
                alt="game Image"
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
        <div className="p-6">
          <p className="text-gray-600">{game.description}</p>
          <div className="flex items-center mt-4">
            <span className="text-gray-800 font-semibold">Price:</span>
            <span className="text-blue-600 ml-2">Rp {game.price}</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-gray-800 font-semibold">Genre:</span>
            <span className="text-gray-600 ml-2">{game.Category?.name}</span>
          </div>
          <div className=" flex items-center mt-0">
            <span className="text-gray-800 font-semibold">Created by</span>
            <span className="text-gray-600 ml-2">{game.User?.username}</span>
          </div>
          <div className="mt-4">
            <NavLink to={"/"}>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                Back to Home
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailgame;
