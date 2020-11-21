import {Card, CardBody, CardImg, CardTitle} from 'reactstrap';
//component
//config
//style
import '../ImagenMediana/ImagenMediana.css';
//libreria


const ImagenMediana = () => {

    return(
    <div className="d-flex row mx-0 col-lg-6  col-md-6">
        <Card  className="col-lg-6  col-md-6 m-0 imgMediana">
            <CardBody>
            <CardTitle>Imagen Mediana</CardTitle>
            <CardImg  width="" src="https://firebasestorage.googleapis.com/v0/b/bd-aves.appspot.com/o/Fig12.jpg?alt=media&token=b7a63dea-8285-4d00-b016-469d4fa47054" />
            </CardBody>
        </Card>
    </div>
    );

}

export default ImagenMediana;