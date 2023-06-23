import { useSelector } from 'react-redux';
import FilterForm from './FilterForm';

function CoinsList() {
  const coins = useSelector((store) => store.coins);

  return (
    <section>
      <FilterForm />
      {coins.coinsArr.map((coin) => (
        <div key={coin}>
          {coin}
        </div>
      ))}
    </section>
  );
}

export default CoinsList;
