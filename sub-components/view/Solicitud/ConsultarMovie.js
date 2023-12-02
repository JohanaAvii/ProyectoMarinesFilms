// import node module libraries
import { Col, Row, Form, Card, Button, Modal ,Table} from 'react-bootstrap';

// import widget as custom components
import { FormSelect } from 'widgets';
import React, { useState } from 'react';

// import hooks
import useMounted from 'hooks/useMounted';

const ConsultarSolicitud= () => {
  const hasMounted = useMounted();
  const [showModal, setShowModal] = useState(false);

  const handleGuardarClick = () => {
    // Lógica para guardar aquí
    // Muestra el modal después de guardar
    setShowModal(true);
  };

  const handleCloseModal = () => {
    // Cierra el modal
    setShowModal(false);
  };


  return (
    <Row className="mb-8">
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">Agregar usuario</h4>
          <p className="mb-0 fs-5 text-muted" style={{ textAlign: 'justify' }}>La funcionalidad de "agregar usuario" 
          implica la capacidad del sistema para registrar y dar acceso a nuevos usuarios 
          dentro de la plataforma o sistema en desarrollo. Esto incluye la creación 
          de un nuevo perfil dentro del entorno del proyecto, lo que normalmente 
          requiere la recolección de datos básicos del usuario, como nombre, 
          dirección de correo electrónico, rol y detalles de inicio de sesión 
          (como una contraseña segura). </p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        <Card>
          {/* card body */}
          <Card.Body> 
            {/* col */}
            <div>
              <div className="mb-6">
                <h4 className="mb-1">Informacion basica</h4>
              </div>
              {hasMounted && 
              <Form>
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="fullName">Nombres:</Form.Label>
                  <Table responsive className="text-nowrap">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">ID Solicitud</th>
            
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Cell</td>
            
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Cell</td>
            
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Cell</td>
            
        </tr>
    </tbody>
</Table>
                </Row>
                
               
               
                
     
                
                {/* rol*/}
                <Row className="align-items-center">
                <Row className="align-items-center">
                   <Col md={{ offset: 8, span: 8 }} xs={12} className="mt-3">
				           <Button variant="primary" type="submit" onClick={handleGuardarClick}>
                    Guardar
                    </Button>
                    
                  </Col>
                  {/* Modal */}
				             <Modal show={showModal} onHide={handleCloseModal}>
                         <Modal.Header closeButton>
                         <Modal.Title>Éxito</Modal.Title>
                        </Modal.Header>
                   <Modal.Body>
                   ¡La operación de guardado se realizó con éxito!
                     </Modal.Body>
                       <Modal.Footer>
                     <Button variant="success" onClick={handleCloseModal}>
                        Cerrar
                         </Button>
                        </Modal.Footer>
                       </Modal>
                       </Row>
                </Row>
              </Form>
              }
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default ConsultarSolicitud