//component
import ImagenMediana from '../ImagenMediana/ImagenMediana';
import ImagenPequeña from '../ImagenPequeña/ImagenPequeña';
//config
//style
import '../Galeria/Galeria.css';
//libreria



const Galeria = () => {

return (

    <div className="d-flex row">
        <ImagenMediana/>  
        <ImagenPequeña/>
    </div>
        
        );
}

export default Galeria;