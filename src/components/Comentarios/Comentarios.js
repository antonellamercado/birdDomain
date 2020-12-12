import {useState, useEffect} from 'react';
//import clienteAxios from '../../config/axios';
import clienteHeroku from '../../config/prod';
import '../Comentarios/Comentarios.css'

const Comentarios = () => {
const [listaComentarios, setListaComentarios]=useState([]);


useEffect(()=>{
    
    const getComents = async ()=>{
        await clienteHeroku.get('/comentarios')
        .then(response =>{
            setListaComentarios(response.data)                            
        });
    }
    getComents();
    }, []);


    return (
        <>
        {
            listaComentarios.length === 0 ? <p>No hay tour disponible</p> :
            (listaComentarios.map((comentario, index) => 
            <div key = {comentario._id} className="comentario d-flex row justify-content-center col-xs-12 col-sm-12 col-md-9 col-lg-9 my-3">                    
                <div className=' col-xs-12 col-sm-12 col-md-9 col-lg-9 comentarios_caja'>
                <p className="comentarios_texto"><strong>{comentario.email} </strong>dice: </p>
                    <p className="comentarios_texto mt-0">"{comentario.body}"</p>   
                </div>
                <div className='d-flex col-xs-3 col-sm-3 col-md-3 col-lg-3 align-content-center imgContainer'>
                <img className = 'comentarios_img img-fluid col-xs-2 col-sm-2 col-md-6 col-lg-6 imgUser' src={comentario.img} alt="img-comentarios"></img>
                </div> 
            </div>    
        ))
        }
        
        </>
    );
}

export default Comentarios;
