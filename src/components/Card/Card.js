import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeCard } from '../../redux/cardsRedux';
import clsx from 'clsx';

const Card = (props) => {
  const dispatch = useDispatch();
  const cardId = props.id;
  const handleAddToFav = (e) => {
    e.preventDefault();
    dispatch(addToFavorites(cardId));
  };
  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeCard(cardId));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button onClick={handleAddToFav} className={clsx(styles.button, props.isFavorite && styles.active)}>
          <span className='fa fa-star-o' />
        </button>
        <button onClick={handleRemove} className={styles.button}>
          <span className='fa fa-trash' />
        </button>
      </div>
    </li>
  );
};

export default Card;
