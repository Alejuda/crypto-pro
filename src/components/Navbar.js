import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { IoChevronBack } from 'react-icons/io5';

const Navbar = () => (
  <header className="flex justify-between p-6 items-center bg-blue-3 text-text-color">
    <NavLink className="lato text-text-color" to="/">
      <div className="flex items-center gap-1">
        <IoChevronBack className="text-base" />
        <p>2023</p>
      </div>
    </NavLink>
    <h1 className="font-bold lato text-xl">CRYPTO-PRO</h1>
    {/* <NavLink className="lato text-text-color" to="/coin">Coin</NavLink> */}
    <div className="flex gap-2">
      <FaMicrophone />
      <IoMdSettings />
    </div>
  </header>
);

export default Navbar;
