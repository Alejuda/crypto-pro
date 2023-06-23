import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCoins } from '../redux/coins/coinsSlice';
import FilterForm from './FilterForm';

function CoinsList() {
  const coins = useSelector((store) => store.coins);

  const dispatch = useDispatch();

  useEffect(() => {
    if (coins.coinsArr.length === 0) {
      dispatch(getCoins());
    }
  }, [dispatch, coins.coinsArr.length]);

  return (
    <section>
      <FilterForm />
      {coins.filteredList.length === 0 ? (
        <ul>
          {coins.coinsArr.map((coin) => (
            <li key={coin.id}>
              {coin.name}
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {coins.filteredList.map((coin) => (
            <li key={coin.id}>
              {coin.name}
            </li>
          ))}
        </ul>
      )}

    </section>
  );
}

export default CoinsList;
