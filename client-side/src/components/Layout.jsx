import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {/* Konten halaman */}
        <Outlet />
      </div>
      <div className="bg-gray-200 py-4">
        {/* Konten footer */}
        <Footer />
      </div>
    </div>
  );
}
