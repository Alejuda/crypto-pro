import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCoins } from '../redux/coins/coinsSlice';
import FilterForm from './FilterForm';
import Coin from './Coin';

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
        <ul className='w-full grid grid-cols-2 gap-2'>
          {coins.coinsArr.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              img={coin.img}
              price={coin.price}
              change={coin.change}
            />
          ))}
        </ul>
      ) : (
        <ul className='w-full grid grid-cols-2 gap-2'>
          {coins.filteredList.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              img={coin.img}
              price={coin.price}
              change={coin.change}
            />
          ))}
        </ul>
      )}

    </section>
  );
}

export default CoinsList;
