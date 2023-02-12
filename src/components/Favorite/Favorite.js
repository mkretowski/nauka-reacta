import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
const Favorite = () => {
  return (
    <div className={styles.favourite}>
      <PageTitle>FAVORITE</PageTitle>
      <p>Lorem Ipsum</p>
    </div>
  );
};

export default Favorite;
