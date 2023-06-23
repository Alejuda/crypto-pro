import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header className="flex justify-between px-6 items-center py-4 mb-8 border-b-2 bg-blue-3 text-text-color">
    <NavLink className="lato text-text-color" to="/">Home</NavLink>
    <h1 className="font-bold lato text-xl">CRIPTO-PRO</h1>
    <NavLink className="lato text-text-color" to="/coin">Coin</NavLink>
  </header>
);

export default Navbar;
