import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../PhonebookSlice/PhonebookSlice';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.phonebook.filter);

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    dispatch(changeFilter(filterValue));
  };

  return (
    <>
      <h2 className={styles.filterTitle}>Search</h2>
      <input
        className={styles.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;