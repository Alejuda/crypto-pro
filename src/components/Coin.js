import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Coin({
  name, symbol, img, price, change,
}) {
  return (
    <NavLink className="lato text-text-color p-5" to="/coin">
      <img className="mx-auto w-16 h-auto" src={img} alt="NAME" />
      <p className="text-center">
        {name}
        
      </p>
      <p className="rounded-lg bg-slate-600 w-max px-4 mx-auto">
      {symbol}
      </p>
      <p className='text-center'>
        $
        {price >= 10 ? price.toFixed(2) : price.toFixed(4)}
      </p>
      <p className={change >= 0 ? 'text-green-800 text-center' : 'text-red-600 text-center'}>
        {change<0 ? '-' : ''}%
        {Math.abs(change)}
      </p>

    </NavLink>
  );
}

export default Coin;

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired,
};
