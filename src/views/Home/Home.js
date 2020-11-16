import React from 'react';
import {Link} from 'react-router-dom';
import img from './Tour2.jpg'

const Home = () => {

    return (
        <Link to = '/'>
<div>Home
</div>
<img className="container-fluid" src = {img} alt = "..."></img>
        </Link>
    );
}

export default Home;