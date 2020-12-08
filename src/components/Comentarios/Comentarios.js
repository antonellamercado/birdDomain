import {useState, useEffect} from 'react';
import clienteAxios from '../../config/axios';
import '../Comentarios/Comentarios.css'

const Comentarios = () => {
const [listaComentarios, setListaComentarios]=useState([]);


useEffect(()=>{
    
    const getComents = async ()=>{
        await clienteAxios.get('api/comentarios')
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
            <div key = {comentario._id} className="comentario d-flex row justify-content-center col-9 my-3">                    
                <div className='col-7 comentarios_caja'>
                <p className="comentarios_texto"><strong>{comentario.email} </strong>says: </p>
                    <p className="comentarios_texto">"{comentario.body}"</p>   
                </div>
                <div className='d-flex col-2 align-content-center'>
                <img className = 'comentarios_img img-fluid' src={comentario.img}></img>
                </div> 
            </div>    
        ))
        }
        
        </>
    );
}

export default Comentarios;
