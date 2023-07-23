import { NavLink } from "react-router-dom";

export default function Nabvar() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto p-4">
          <NavLink to={"/"}>
            <p className="flex items-center px-10">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Game.id
              </span>
            </p>
          </NavLink>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm px-10">
              <NavLink to={"/"}>
                <p
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </p>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
