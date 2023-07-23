import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <section>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content py-10">
            {/* Page content here */}
            <Outlet />
          </div>
          <div className="drawer-side px-6 py-2 bg-gray-300">
            <label htmlFor="my-drawer-2" className="drawer-overlay">
              Game Management
            </label>
            <ul className="menu py-4 w-full h-full text-base-content bg-gray-300">
              {/* Sidebar content here */}
              <NavLink to={"/"}>
                <p className="py-2">
                  Game List
                </p>
              </NavLink>
              <NavLink to={"/genre"}>
                <p className="py-2">
                  Genre List
                </p>
              </NavLink>
              <NavLink to={"/addAdmin"}>
                <p className="py-2">
                  Add New Admin
                </p>
              </NavLink>
              <p className="py-2" onClick={logout}>Logout</p>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout;
