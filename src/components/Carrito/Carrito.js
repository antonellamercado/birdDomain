import { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import "../Carrito/Carrito.css"

const Carrito = () => {
    const [products, setProducts] = useState([]);
    const [tours, setTours] = useState([]);
    const [totalPrice, setTotalPrice] = useState([])

    useEffect(()=>{
        const getBuys = async ()=>{
            await axios.get(`http://localhost:5000/usuarios/1`)
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
        await axios.patch(`http://localhost:5000/usuarios/1`, {buys:[...products, product]});
        setProducts([...products, product]);
    }
    
    const deleteProduct = async (e)=>{
        const newProducts = products.filter(product => product.id !== Number(e.target.id));
        setProducts(newProducts);
        await axios.patch(`http://localhost:5000/usuarios/1`, {buys:newProducts});
    };
    function buyListOnOff(){
        let buyListOnOff = document.getElementById("buyListOnOff");
        if (buyListOnOff.classList.value ==="d-none"){
            buyListOnOff.classList.remove("d-none");
            buyListOnOff.classList.add("d-inline");
        }else{
            buyListOnOff.classList.remove("d-inline");
            buyListOnOff.classList.add("d-none");
        }
    }
    function sumar (){
        let total=0;
        let i = 0;
        for(i=0;i<products.length;i++){
            total+=products[i].price
        }
        return(total)
    }
    return (
        <>                               
            <div className="d-flex justify-content-end my-4 mr-5">
                <i className="fas fa-shopping-bag d-flex" onClick={buyListOnOff}>
                    {
                        products.length > 0 ? <div id="buyMessage">{products.length}</div>:(<div></div>)
                    }
                </i>
            </div>
            <div id="buyListOnOff" className="d-none">
                {
                    products.length === 0 ? 'No hay productos' : (
                        products.map((product, index) => 
                            <div key={index} className="d-flex justify-content-end my-3 mr-4">
                                <div >
                                    <p className="priceProduct" value={product.price}>{product.title} - {product.price}U$D</p>
                                </div>
                                <div>
                                    <i id={product.id} className="fas fa-trash ml-4" onClick={deleteProduct}></i>                                           
                                </div>                                                                 
                            </div>
                        )                             
                    )                          
                }
                <div className="d-flex justify-content-end mr-4 mb-4">
                    <div className="d-flex justify-content-end mr-4">
                        <p className="mt-2"><b>Total: {sumar()}U$D</b></p>
                    </div>
                    <div>
                        <Link to = '/Checkout'>
                            <button className="btn btn-success">Finalizar Compras</button>
                        </Link>
                    </div>
                </div>
            </div>
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