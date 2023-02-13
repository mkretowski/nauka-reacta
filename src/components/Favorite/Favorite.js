import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import clsx from 'clsx';

const Favorite = (props) => {
  const cards = useSelector((state) => getFavoriteCards(state, props.id));
  return (
    <div className={styles.favourite}>
      <PageTitle>FAVORITE</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          <li className={clsx(styles.title, cards.length === 0 && styles.active)}>No Cards</li>
          {cards.map((card) => (
            <Card key={card.id} id={card.id} title={card.title} />
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Favorite;
