import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios';


const SearchBar = () => {
    return (
  <div>
      <form className="d-flex d-block">
          <input type="search" 
            id="searchBar" 
            className="inputSearch"
            placeholder="Search...">
            </input> 
            <button className="btn btn-primary"><FontAwesomeIcon  icon={faSearch} /></button>
      </form>

  </div>
    );
}

export default SearchBar;






