import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../redux/store';
import clsx from 'clsx';

const Card = (props) => {
  const dispatch = useDispatch();
  const cardId = props.id;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToFavorites(cardId));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button onClick={handleSubmit} className={clsx(styles.button, props.isFavorite && styles.active)}>
        <span className='fa fa-star-o' />
      </button>
    </li>
  );
};

export default Card;
