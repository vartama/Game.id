import { useParams } from "react-router-dom";

const GenreForm = ({ formHandler, submitForm, editGenre }) => {
  const { id } = useParams();

  return (
    <section>
      <form>
        <h1>{id ? "Edit Genre" : "Add New Genre"}</h1>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name Genre
          </label>
          <input
            type="text"
            id="genre"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="please insert name genre"
            onChange={formHandler}
            // defaultValue={editGenre.name}
            required
          ></input>
          <button
            type="submit"
            onClick={submitForm}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {id? 'Edit' : 'Add Genre'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default GenreForm
