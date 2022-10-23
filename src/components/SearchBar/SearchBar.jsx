import React from "react";
import { useState } from "react";
// import PropTypes from 'prop-types';
import Notiflix from "notiflix";
// import styles from './SearchBar.module.css'

const SearchBar = ({ onSubmit, query }) => {
    const [value, setValue] = useState(query);

    const handleSubmit = e => {
        e.preventDefault();
        const valueInput = value.trim();
        if (valueInput === "") {
            Notiflix.Notify.failure(
                'You have to enter something first to search for movie!')
            return;
        }


        onSubmit(value);
        reset();
    };
  
    const handleChange = e => {
        setValue(e.target.value)
    };

    const reset = () => {
    
        setValue('');
    };


   return (
    //   <header className={styles.Searchbar}>
    //    <form className={styles.SearchForm} onSubmit={handleSubmit}>
            <form onSubmit={handleSubmit}>
           {/* <button type="submit" className={styles.SearchFormButton}> */}
               <button type="submit">
               <span >
                   {/* <span className={styles.SearchFormButtonLabel}> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 20 20"
              >
                <title>search</title>
                <path d="M19 17l-5.15-5.15a7 7 0 1 0-2 2L17 19zM3.5 8A4.5 4.5 0 1 1 8 12.5 4.5 4.5 0 0 1 3.5 8z" />
              </svg>
            </span>
          </button>

           <input 
            //    <input className={styles.SearchFormInput}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
    //   </header>
    );
}

export default SearchBar;