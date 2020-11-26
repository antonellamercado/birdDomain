import {useState, useEffect} from 'react';
import clienteAxios from '../../config/axios';
import '../Comentarios/Comentarios.css'

const Comentarios = () => {
const [listaComentarios, setListaComentarios]=useState([]);


useEffect(()=>{
    
    const getComents = async ()=>{
        await clienteAxios.get('/Comentarios')
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
            <div key = {comentario.id} className="comentarios_caja d-flex row justify-content-center col-9 my-3">
                <div className='d-flex col-2 align-content-center'>
                <img className = 'comentarios_img' src={comentario.img}></img>
                </div> 
                    
                <div className='col-7'>
                <p><strong>{comentario.email} </strong>says: </p>
                    <p>"{comentario.body}"</p>
                    
                </div>
                
            </div>    
        ))
        }
        
        </>
    );
}

export default Comentarios;
