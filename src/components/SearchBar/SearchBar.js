import React, {useState, useEffect} from 'react';
//styles
import "bootstrap/dist/css/bootstrap.css";
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Form, Button} from 'react-bootstrap';
//config
import clienteHeroku from '../../config/prod';
import { LinkContainer } from "react-router-bootstrap";
import {Nav} from 'react-bootstrap';


const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [tours, setTours] = useState([]);


  useEffect(()=>{
    const getTours = async ()=>{
    await clienteHeroku.get("/tours")
    .then(response =>{
    setTours(response.data)
});
}
getTours();
},[]);

    return (
<div className='searchBar'>
    <div >
    <Form inline className="searchForm">
          <input type="search" 
            id="searchBar" 
            className="inputSearch mr-sm-2"
            placeholder="Search..."
            onChange={(e => {setSearchText(e.target.value)})}
            /> 
            <Button  variant="success"><FontAwesomeIcon  icon={faSearch} /></Button>
      </Form>
    </div>

    <div>
        {tours.filter((val)=> {
            if (searchText === ""){
            } else if (val.title.toLowerCase().includes(searchText.toLowerCase())){
                return val
            }
        }).map((val,key)=>{
            return (
                <LinkContainer to={`/tours/${val._id}`}  onClick = {() => setSearchText ("")}>
                <Nav.Link>
                <div key={val._id} className="searchResult row mt-3">
                    <div clasName="mr-5">
                    <p className="nav-links-links tourContainer">{val.title}</p>
                    </div>
                    <div className="searchImgContainer">
                        <img className="searchImg" src={val.img} alt="img-search"></img>
                    </div>
                </div>
                </Nav.Link>
                </LinkContainer>
            )
        })
        }
    </div>

    </div>
    );
}

export default SearchBar;