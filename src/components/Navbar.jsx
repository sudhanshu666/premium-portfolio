import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center backdrop-blur-md bg-glass dark:bg-darkGlass z-50">
    <h1 className="text-xl font-bold">🌠 Cosmic</h1>
    <div className="space-x-6">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;