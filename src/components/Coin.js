import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Coin({
  id, name, symbol, img, price, change, index,
}) {
  const differentStyle = index % 4 === 1 || index % 4 === 2;
  const style = differentStyle ? 'bg-blue-3' : 'bg-blue-4';
  return (
    <NavLink className={`lato text-text-color p-5 coin ${style}`} to={`coin/${id}`}>
      <img className="mx-auto w-16 h-auto" src={img} alt="NAME" />
      <p className="text-center">
        {name}

      </p>
      <p className="rounded-lg bg-slate-600 w-max px-4 mx-auto">
        {symbol}
      </p>
      <p className="text-center">
        $
        {price >= 10 ? price.toFixed(2) : price.toFixed(4)}
      </p>
      <p className={change >= 0 ? 'text-green-500 text-center' : 'text-red-500 text-center'}>
        {change < 0 ? '-' : ''}
        %
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
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
