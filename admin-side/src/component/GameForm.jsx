import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { genreMiddleware } from "../actions/actionCreator";
import { useParams } from "react-router-dom";

const GameForm = (
  formHandler,
  submitForm,
  handleImageChange,
  imagesInput,
  addImage,
  editGame
) => {
  const { genres } = useSelector((state) => state.genres);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(genreMiddleware());
  }, []);

  return (
    <section className="px-8">
      <form>
        <h1 className="text-2xl font-bold mb-4">
          {id ? "Update Game" : "Add New Game"}
        </h1>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title Game
          </label>
          <input
            type="text"
            id="title"
            placeholder="please input title game"
            name="title"
            onChange={formHandler}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            // defaultValue={editGame.title}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description Game
          </label>
          <input
            type="text"
            id="description"
            placeholder="please input description game"
            name="description"
            onChange={formHandler}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            // defaultValue={editGame.description}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Price Game
          </label>
          <input
            type="number"
            id="price"
            placeholder="please input price game"
            name="price"
            onChange={formHandler}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            // defaultValue={editGame.price}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="categoryId"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Genre Game
          </label>
          <select
            id="categoryId"
            placeholder="please select genre game"
            name="categoryId"
            onChange={(event) => formHandler(event)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            // defaultValue={editGame ? editGame.categoryId : ""}
          >
            <option value="" disabled>
              Select Genre Game
            </option>
            {genres.map((genre) => (
              <option value={genre.id} key={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="mainImg"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Main Image Game
          </label>
          <input
            type="text"
            id="mainImg"
            placeholder="please input image game"
            name="mainImg"
            onChange={formHandler}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            // defaultValue={editGame.mainImg}
          />
        </div>
        {imagesInput?.map((image, index) => (
          <div key={image.id} className="mb-4">
            <label
              htmlFor={`imgUrl${index}`}
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Image Game
            </label>
            <input
              type="text"
              id={`imgUrl${index}`}
              name="imgUrl"
              onChange={(event) => handleImageChange(event, index)}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              // defaultValue={image?.imgUrl}
            />
          </div>
        ))}
        <div className="flex justify-between">
          <button
            className="btn rounded-full bg-blue-300 text-white font-medium px-5 py-2.5 text-center focus:outline-none focus:ring-4 focus:ring-blue-300"
            type="submit"
            onClick={submitForm}
          >
            {id ? "Update Game" : "Submit"}
          </button>
          <button
            className="btn rounded-full bg-blue-300 text-white font-medium px-5 py-2.5 text-center focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={imagesInput}
          >
            Add Image
          </button>
        </div>
      </form>
    </section>
  );
};

export default GameForm;
