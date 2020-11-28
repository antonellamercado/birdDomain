import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import img from '../../img/Fig3.jpg'
import './ModalCuenta.css'


export const ModalReg = (props) => {
    return (
        <div>
            <>
            <Modal {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modal-body text-dark">
        <Modal.Title id="contained-modal-title-vcenter">
          Registrate  
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body text-dark">
      <Form className="mt-2" id="form">
      <div className="form-group mt-5">
                    <div className="mt-3">
                        <label for="user" className="text-dark">Nombre de Usuario</label>
                        <input type="text" name="user" className="form-control" id="newUser" placeholder="Nombre de usuario" required minlength="4" maxlength="8"/>
                        <small className="form-text text-muted">Debe tener entre 8 y 30 caractares. No puedes utilizar caracteres especiales.</small>
                    </div>
                    <div className="mt-3">
                        <label for="pass">Contraseña</label>
                        <input type="password" name="pass" className="form-control" id="newPass" placeholder="Contraseña" required minlength="8" maxlength="16"/>
                        <small className="form-text text-muted">Minimo de 8 caracteres.</small>
                    </div>
                    <div className="mt-3">
                        <label for="pass">Confirme contraseña</label>
                        <input type="password" name="pass" className="form-control" id="newPassV" placeholder="Contraseña" required minlength="8" maxlength="16"/>
                        <small className="form-text text-muted">Ingrese contraseña nuevamente.</small>
                    </div>
                    <div className="mt-3">
                        <label for="email">Correo Electrónico</label>
                        <input type="email" name="email" className="form-control" id="newEmail" placeholder="ejemplo@email.com" required/>
                        <small className="form-text text-muted">Tu dirección de correo electrónico se utiliza para confirmar las compras y enviarte notificaciones de los tours.</small>
                    </div>
                    <div className="mt-3">
                        <label for="email">Confirme correo electronico</label>
                        <input type="email" name="email" className="form-control" id="newEmailV" placeholder="ejemplo@email.com" required/>
                        <small className="form-text text-muted">Coloque su correo electronico nuevamente.</small>
                    </div>
                    <label for="contry" className="mt-4">País de residencia</label>
                    <select name="contry" id="contry" className="text-black" value="" required>
                        <option value="AR">Argentina</option>
                        <option value="UR">Uruguay</option>
                        <option value="CH">Chile</option>
                        <option value="EU">Estados Unidos</option>
                        <option value="EN">Inglaterra</option>
                        <option value="DI">Dinamarca</option>
                        <option value="HO">Holanda</option>
                        <option value="AU">Australia</option>
                        <option value="BO">Bolivia</option>
                        <option value="JA">Japon</option>
                        <option value="CHI">China</option>
                        <option value="IN">India</option>
                    </select>
                    <div id="modalError" className="pt-2"></div>
                    <div className="d-flex justify-content-center">
                        <Button type="submit" className="btn mt-4 text-white" id="submit">Finalizar registro</Button>
                    </div>
                </div>
        </Form> 
        </Modal.Body>
      <Modal.Footer className="modal-body">
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
      </>
        </div>
    )
}

export default ModalReg;