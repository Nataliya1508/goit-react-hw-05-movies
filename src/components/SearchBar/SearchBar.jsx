import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Notiflix from "notiflix";
import styles from './SearchBar.module.css'

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
    
            <form className={styles.form} onSubmit={handleSubmit}>
           
               <button className={styles.submit}type="submit">
               <span >
                  
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <title>search</title>
                <path d="M19 17l-5.15-5.15a7 7 0 1 0-2 2L17 19zM3.5 8A4.5 4.5 0 1 1 8 12.5 4.5 4.5 0 0 1 3.5 8z" />
              </svg>
            </span>
          </button>

           <input className={styles.inputField}
           
            type="text"
            onChange={handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images"
          />
        </form>
    
    );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
}

export default SearchBar;