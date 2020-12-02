import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
//styles
import "bootstrap/dist/css/bootstrap.css";
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Form, Button} from 'react-bootstrap';
//config
import clienteAxios from '../../config/axios';



const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [tours, setTours] = useState([]);

  useEffect(()=>{
    const getTours = async ()=>{
    await clienteAxios.get("/Tours")
    .then(response =>{
    setTours(response.data)
});
}
getTours();
},[]);

    return (
<div>
    <div >
    <Form inline className="searchForm">
          <input type="search" 
            id="searchBar" 
            className="inputSearch mr-sm-2"
            placeholder="Search..."
            onChange={(e => {setSearchText(e.target.value)})}
            type="text"
            /> 
            <Button  variant="success"><FontAwesomeIcon  icon={faSearch} /></Button>
      </Form>
    </div>

    <div>
        {tours.filter((val)=> {
            if (searchText == ""){
            } else if (val.title.toLowerCase().includes(searchText.toLowerCase())){
                return val
            }
        }).map((val,key)=>{
            return (
                <Link to={`/tours/${val.id}`} onClick = {() => setSearchText ("")}>
                <div key={key} className="searchResult row mt-3">
                    <div clasName="mr-5">
                    <p className="nav-links-links tourContainer">{val.title}</p>
                    </div>
                    <div className="searchImgContainer">
                        <img className="searchImg" src={val.img}></img>
                    </div>
                </div>
                </Link>
            )
        })
        }
    </div>

  </div>
    );
}

export default SearchBar;