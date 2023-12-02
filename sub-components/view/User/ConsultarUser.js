// import node module libraries
import { Col, Row, Form, Card, Button, Container,  Modal, Table, OverlayTrigger, Tooltip  } from 'react-bootstrap';

// import widget as custom components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';



// import hooks
import useMounted from 'hooks/useMounted';


import React, { useState} from 'react';


const ConsultarUser = () => {
  const hasMounted = useMounted();
  const [showModal, setShowModal] = useState(false);
  const [showEditarModal, setShowEditarModal] = useState(false);
  const [showEliminarModal, setShowEliminarModal] = useState(false);

  const GeneroOptions = [
    { value: 'm', label: 'Masculino' },
    { value: 'f', label: 'Femenino' },
    
  ];
  
  const RolOptions = [
    { value: 'Cinefilo', label: 'Cinefilo' },
    { value: 'Productor', label: 'Productor' },
    
  ];
  const handleEditarClick = () => {
    setShowEditarModal(true);
  };

  const handleEliminarClick = () => {
    setShowEliminarModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => setShowModal(true);


  const handleShowTable = () => setShowTable(true);

  const handleCloseEditarModal = () => {
    setShowEditarModal(false);
  };

  const handleCloseEliminarModal = () => {
    setShowEliminarModal(false);
  };

  const handleGuardarClick = () => {
    // Lógica para realizar la operación de guardado
    // Después de realizar la operación de guardado, muestra el modal de éxito
    setShowModal(true);
  };

  const renderTooltipEditar = (props) => (
    <Tooltip id="tooltip-editar" {...props}>
      Editar
    </Tooltip>
  );

  const renderTooltipEliminar = (props) => (
    <Tooltip id="tooltip-eliminar" {...props}>
      Eliminar
    </Tooltip>
  );

  return (
    
			<Card>
            {/* card body */}
             <Card.Body> 
				 {/* col */}
				 <div>
              
              {hasMounted && 
              <Form>
                <Row className="mb-3">
                       <Table responsive className="text-nowrap ">
                   <thead>
                 <tr>
            <th scope="col">#</th>
            <th scope="col">Primer Nombre</th>
            <th scope="col">Segundo Nombre</th>
            <th scope="col">Primer Apellido</th>
            <th scope="col">Segundo Apellido</th>
            <th scope="col">Correo</th>
            <th scope="col">Contraseña</th>
            <th scope="col">Genero</th>
            <th scope="col">Telefono</th>
            <th scope="col">Rol</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>
              <OverlayTrigger
                placement="top"
                overlay={renderTooltipEditar}
              >
                <FontAwesomeIcon
                  icon={faEdit}
                  className="text-success mr-2"
                  onClick={handleEditarClick}
                />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={renderTooltipEliminar}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-danger"
                  onClick={handleEliminarClick}
                />
              </OverlayTrigger>
            </td>
            
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>
              <OverlayTrigger
                placement="top"
                overlay={renderTooltipEditar}
              >
                <FontAwesomeIcon
                  icon={faEdit}
                  className="text-success mr-2"
                  onClick={handleEditarClick}
                />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={renderTooltipEliminar}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-danger"
                  onClick={handleEliminarClick}
                />
              </OverlayTrigger>
            </td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>
              <OverlayTrigger
                placement="top"
                overlay={renderTooltipEditar}
              >
                <FontAwesomeIcon
                  icon={faEdit}
                  className="text-success mr-2"
                  onClick={handleEditarClick}
                />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={renderTooltipEliminar}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-danger"
                  onClick={handleEliminarClick}
                />
              </OverlayTrigger>
            </td>
            
             </tr>
            </tbody>
             </Table>

              {/* Modales */}

      {/* Modal para Editar */}
      <Modal show={showEditarModal} onHide={handleCloseEditarModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Form>
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="fullName">Nombres:</Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Control type="text" placeholder="Primer Nombre" id="Primer Nombre" required />
                  </Col>
                  <Col sm={4}>
                    <Form.Control type="text" placeholder="Segundo Nombre" id="Segundo Nombre" required />
                  </Col>
                </Row>
                <Row className='mb-3'>
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="fullName">Apellidos:</Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Control type="text" placeholder="Primer Apellido" id="Primer Apellido" required />
                  </Col>
                  <Col sm={4}>
                    <Form.Control type="text" placeholder="Segundo Apellido" id="Segundo Apellido" required />
                  </Col>
                </Row>
                {/* row  email*/}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="email">Correo</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="email" placeholder="Email" id="email" required />
                  </Col>
                </Row>
                {/* row contraseña */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="addressLine">contraseña</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="password" placeholder="Contraseña" id="addressLine" required />
                  </Col>
                </Row>
                {/* row genero*/}
                <Row className="mb-3">
  <Form.Label className="col-md-4" htmlFor="langauge">
    Genero
  </Form.Label>
  <Col md={8} xs={12}>
    <Form.Select
      defaultValue="Femenino"
      placeholder="Seleccionar"
      id="Genero"
    >
      {/* Aquí puedes agregar opciones según tus necesidades */}
      <option value="Femenino">Femenino</option>
      <option value="Masculino">Masculino</option>
      {/* Agrega más opciones según sea necesario */}
    </Form.Select>
  </Col>

          </Row>
                {/* row  phone*/}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="phone">Telefono <span className="text-muted">(Optional)</span></Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Telefono" id="phone" />
                  </Col>
                </Row>
                {/* rol*/}
                <Row className="mb-3">
  <Form.Label className="col-md-4" htmlFor="langauge">
    Rol
  </Form.Label>
  <Col md={8} xs={12}>
    <Form.Select
      defaultValue="Cinefilo"
      placeholder="Seleccionar"
      id="Rol"
    >
      {/* Aquí puedes agregar opciones según tus necesidades */}
      <option value="Cinefilo">Cinefilo</option>
      <option value="Productor">Productor</option>
      {/* Agrega más opciones según sea necesario */}
    </Form.Select>
  </Col>
    </Row>
          
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditarModal}>
            Cerrar
          </Button>
          <Button variant="secondary" onClick={handleCloseEditarModal}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para Eliminar */}
      <Modal show={showEliminarModal} onHide={handleCloseEliminarModal}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">Delete Account</h4>
          <p className="mb-0 fs-5 text-muted">Easily set up social media accounts</p>

          
        
            <div className="mb-6">
              <h4 className="mb-1">Danger Zone </h4>
            </div>
            <div>
              <p>Delete any and all content you have, such as articles, comments, your reading list or chat messages. Allow your username to become available to anyone.</p>
              
              <p className="small mb-0 mt-3">Feel free to contact with any </p>
            </div>
        </div>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEliminarModal}>
            Cerrar
          </Button>
        </Modal.Footer>
          </Modal>

                </Row>

              </Form>
              }
            </div>
 
			</Card.Body>
			</Card>
			


  )
}

export default ConsultarUser