import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function CoinSection({ id }) {
  const coins = useSelector((store) => store.coins);

  const coinDetails = coins.coinsArr.find((item) => item.id === id);

  return (
    <section>
      {coinDetails.name}
    </section>
  );
}

export default CoinSection;

CoinSection.propTypes = {
  id: PropTypes.string.isRequired,
};
