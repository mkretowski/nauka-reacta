import styles from './ListForm.module.scss';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
const ListForm = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.listform} onSubmit={handleSubmit}>
      <label className={styles.label}>Title:</label>{' '}
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <label className={styles.label}>Description:</label>{' '}
      <TextInput value={description} onChange={(e) => setDescription(e.target.value)} />
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;
