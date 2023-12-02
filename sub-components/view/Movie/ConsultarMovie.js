// import node module libraries
import { Col, Row, Form, Card, Button, Modal ,Table, CardBody} from 'react-bootstrap';

// import widget as custom components
import { FormSelect } from 'widgets';
import React, { useState } from 'react';

// import hooks
import useMounted from 'hooks/useMounted';

const ConsultarMovie= () => {
  const hasMounted = useMounted();
  const [mostrarTabla, setMostrarTabla] = useState(false);

  const handleConsultarClick = () => {
    // Lógica para cargar los datos de la tabla, por ejemplo, hacer una solicitud a la API.
    // Aquí, usaremos un array de ejemplo para la demostración.
    setMostrarTabla(true);
  };
  


  return (
    <Row className="mb-8">
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">Consultar peliculas</h4>
          <p className="mb-2 fs-5 text-muted" style={{ textAlign: 'justify' }}> 
          La funcionalidad de "consultar película" en nuestro sistema proporciona a los usuarios la 
          capacidad de buscar y obtener información detallada sobre películas existentes. 
         </p>
         <Button variant="primary" className="mb-1">Consultar</Button>
        </div>
      </Col>


      <Col xl={9} lg={8} md={12} xs={12}>
                 
        <Card>
            <CardBody>
            <Card.Title>Resultado de la Consulta</Card.Title>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Año</th>
                  <th>Género</th>
                  {/* Agrega más encabezados según tu necesidad */}
                </tr>
              </thead>
              <tbody>
                {/* Aquí puedes mapear los datos de la película en filas de la tabla */}
                <tr>
                  <td>Nombre de la Película</td>
                  <td>Año de Lanzamiento</td>
                  <td>Género</td>
                  {/* Agrega más celdas según tu necesidad */}
                </tr>
              </tbody>
            </Table>


            </CardBody>
        </Card>
    
        </Col>

         </Row>
  )
}

export default ConsultarMovie