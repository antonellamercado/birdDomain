import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
//styles
import "bootstrap/dist/css/bootstrap.css";
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Form,FormControl, Button} from 'react-bootstrap';
//config
import axios from 'axios';
import clienteAxios from '../../config/axios';



const SearchBar = () => {

    const [toursSearch, setToursSearch] = useState([
        { id: '',
         title: '',
         body: '',
         img: '',
         map: '',
         price: '',
         dias: 0,
         Ecoregiones:'',
         especies:0 }
     ]);
     
     useEffect ( () => {
         const getTour = async () => {
         await clienteAxios.get("/Tours")
         .then(response =>{
         setToursSearch(response.data)
         });
         }
         getTour();
         },[]);

    return (
<>
    <div >
    <Form inline className="searchForm">
          <input type="search" 
            id="searchBar" 
            className="inputSearch mr-sm-2"
            placeholder="Search..."
            onKeyUp={e => {
                    console.log (e.target.value)
                const searchValue = e.target.value.toLowerCase(); 
                const filteredTours = toursSearch.filter ((tours => {
                    return (
                    tours.title.toLowerCase().includes(searchValue) || 
                    tours.Ecoregiones.toLowerCase().includes(searchValue) || 
                    tours.dias.toLowerCase().includes(searchValue)
                    );
                }));
                console.log(filteredTours)
                // displayTourSearch (filteredTours)
                }
            }>
            </input> 
            <Button  variant="outline-success"><FontAwesomeIcon  icon={faSearch} /></Button>
      </Form>
    </div>

  </>
    );
}

export default SearchBar;


/* <Form inline>
              <FormControl type="search" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success"><FontAwesomeIcon  icon={faSearch} /></Button>
            </Form> */





