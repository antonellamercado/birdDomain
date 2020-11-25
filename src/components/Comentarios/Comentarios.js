import {useState, useEffect} from 'react';
import clienteAxios from '../../config/axios';
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
console.log('comentarios', listaComentarios);

    return (
        <>
        {
            listaComentarios.length === 0 ? <p>No hay tour disponible</p> :
            (listaComentarios.map((comentario, index) => 
            <div> 
                <p>comentario.body</p>
            </div>    
        ))
        }
        </>
    );
}

export default Comentarios;
