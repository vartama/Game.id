import { useState, useEffect } from "react";

const FormProduct = () => {
  const [dataGenre, serDataGenre] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/categories");
        const data = await response.json();
        serDataGenre(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  console.log(dataGenre);

  return (
    <section className="mx-36">
      <div className="w-full p-6 m-auto bg-blue-200 rounded-md shadow-md lg:max-w-lg">
        <form className="space-y-4" action="">
          <div>
            <label className="label">
              <span className="text-base label-text">Title Game</span>
            </label>
            <input
              type="text"
              placeholder="Title Game"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Price Game</span>
            </label>
            <input
              type="text"
              placeholder="Price Game"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Genre Game</span>
            </label>
            <select className="select select-primary w-full max-w-xs">
              <option disabled selected>
                Choose your genre game
              </option>
              {dataGenre.map((genre) => (
                <option value={genre.id} selected>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormProduct;
