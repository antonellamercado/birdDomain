import React, { useState, useEffect, useContext } from 'react';
import {UserContext} from "../../context/UserContext";
import {Link} from 'react-router-dom';
import "./Cart.css";
import clienteHeroku from '../../config/prod';

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [tours, setTours] = useState([]);
    const [cartList, setCart] = useState(false);
    const { userData } = useContext(UserContext);
    const [mounted, setMounted] = useState(false);
    const AuthStr = userData.token

    useEffect(()=>{
        if (!mounted) {
            setMounted(true)
                window.scrollTo(0,0);
        }
        
        const getBuys = async ()=>{          
            await clienteHeroku.get(`/users/`, { headers: { "x-auth-token": AuthStr } })
            .then(response =>{
                setProducts(response.data.buys)                            
            });
        }
        getBuys();
        const getTours = async ()=>{
            await clienteHeroku.get("/tours")
            .then(response => {
                setTours(response.data)
            });
        }
        getTours();
    },[])
    const updateProduct = async (product)=> {
        await clienteHeroku.put(`/users/${userData.user.id}`, {buys:[...products, product]});
        setProducts([...products, product]);    
    }
    const deleteProduct = async (e)=>{
        const newProducts = products.filter(product => product._id !== e.target.id);
        setProducts(newProducts);
        await clienteHeroku.put(`/users/${userData.user.id}`, {buys:newProducts});
    };
    function buyListOnOff(){
        setCart(!cartList)
    }
    function addTotalPrice(){
        let total=0;
        let i = 0;
        for(i=0;i<products.length;i++){
            total+=products[i].price
        }
        return(total)
    }
    function checkBuy(_id){
        let i=0;
        for(i=0;i<products.length;i++){
            if(_id===products[i]._id){
                return (products[i]._id)       
            }
        }
    }
    return (
        <> 
            <div id="buyBag">                              
            <div className="d-flex justify-content-end my-4 mr-5">
                <i className="fas fa-shopping-bag d-flex" onClick={buyListOnOff}>
                    {
                        products.length > 0 ? <div id="buyMessage">{products.length}</div>:null
                    }
                </i>
            </div>
            { cartList===false?null:
                <div className="listCart px-2">
                    {
                        products.length === 0 ? <p className="my-2">No hay productos</p> : (
                            products.map((product, index) => 
                                <div key={index} className="d-flex justify-content-end my-3">
                                    <div >
                                        <p className="priceProduct" value={product.price}>{product.title} - {product.price}U$D</p>
                                    </div>
                                    <div>
                                        <i id={product._id} className="fas fa-trash ml-4" onClick={deleteProduct}></i>                                           
                                    </div>                                                                 
                                </div>
                            )                             
                        )                          
                    }
                    <div className="d-flex justify-content-end mr-5 mb-4">
                        <div className="d-flex justify-content-end mr-4">
                            <p className="mt-2"><b>Total: {addTotalPrice()}U$D</b></p>
                        </div>
                        <div>             
                            <Link to='/checkout'>
                                <button className="btn btn-success">Finalizar Compras</button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
            </div>
            <div className="container">
                <div>
                    {
                        tours.length === 0 ?  "No hay tours": (
                            tours.map((tour, index) => 
                                <div  key={index}>
                                        <div className="card bg-dark text-white my-4 cardsTour">
                                            <img src={tour.img} className="card-img" alt="..."/>
                                            <div className="card-img-overlay d-flex flex-column-reverse text-left">
                                                <Link to={`/tours/${tour._id}`} className="text-warning">                             
                                                    <h5 className="card-title">{tour.title}</h5>
                                                </Link>
                                                <p className="card-text">Precio por persona: {tour.price}U$D</p>
                                                <p className="card-text">Duracion del Tour: {tour.dias}</p>                                  
                                                <div className="btnBuyTour">
                                                    {
                                                        checkBuy(tour._id)!==tour._id || checkBuy(tour._id)==null?<button id={tour._id} className="btn btn-success" onClick={ e =>{updateProduct(tour)} }>Comprar Tour</button>:
                                                        <button className="btn btn-success disabled">Tour en carrito</button>
                                                    }                                             
                                                </div>                                    
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
export default Cart;