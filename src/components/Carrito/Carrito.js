import { useState, useEffect } from 'react';
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Carrito = () => {
    const [products, setProducts] = useState([]);
    const [tours, setTours] = useState([]);

    useEffect(()=>{
        const getBuys = async ()=>{
            await axios.get(`http://localhost:5000/users/1`)
            .then(response =>{
                setProducts(response.data.buys)
            });
        }
        getBuys();
        const getTours = async ()=>{
            await axios.get("http://localhost:5000/Tours")
            .then(response =>{
                setTours(response.data)
            });
        }
        getTours();
    },[])
    const updateProduct = async (product)=> {
        await axios.patch(`http://localhost:5000/users/1`, {buys:[...products, product]});
        setProducts([...products, product]);
    }
    
    const deleteProduct = async (e)=>{
        const newProducts = products.filter(product => product.id !== Number(e.target.id));
        setProducts(newProducts);
        await axios.patch(`http://localhost:5000/users/1`, {buys:newProducts});
    };
    return (
        <>
            <Navbar bg="light" expand="lg">      
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                    <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                    <NavDropdown title=""id="basic-nav-dropdown" >
                        <NavDropdown.Item >
                            {
                                products.length === 0 ? 'No hay productos' : (
                                    products.map((product, index) => 
                                        <div key={index} className="d-flex justify-content-between my-3">
                                            <div >
                                                <p>{product.title}</p>
                                            </div>
                                            <button id={product.id} className="btn btn-dark ml-4" onClick={deleteProduct}>Quitar Compra</button>
                                        </div>
                                    )
                                )
                            }
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="container">
                <div>
                    {
                        tours.length === 0 ? "No hay tours": (
                            tours.map((tour, index) => 
                                <div key={index}>
                                    <div id={tour.id} className="card mb-3">
                                        <h4 id={tour.title} className="card-header">{tour.title}</h4>
                                        <img src={tour.img} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{tour.body}</h5>
                                            <p className="card-text">Precio por persona: {tour.price}</p>
                                            <p className="card-text">Duracion del Tour: {tour.dias}</p>
                                        </div>
                                        <div className="card-footer">
                                        <button id={tour.id} className="btn btn-success" onClick={ e => {
                                            const product = {
                                                    id: tour.id,
                                                    title:tour.title,
                                                    body: tour.body,
                                                    img: tour.img,
                                                    mapa:tour.mapa,
                                                    price:tour.price,
                                                    dias:tour.dias,
                                                    Ecoregiones:tour.ecoregiones,
                                                    especies:tour.especies
                                                }
                                                updateProduct(product);
                                            }
                                        } >Buy Tour</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default Carrito