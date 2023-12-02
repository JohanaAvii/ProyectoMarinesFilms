// import node module libraries
import { Col, Row, Form, Card, Button, OverlayTrigger, Popover} from 'react-bootstrap';

// import widget as custom components
import { FormSelect} from 'widgets';

// import hooks
import useMounted from 'hooks/useMounted';

const AddMovie = () => {
  const hasMounted = useMounted();

  const GeneroOptions = [
    { value: 'accion', label: 'Accion' },
    { value: 'aventura', label: 'Aventura' },
    { value: 'catastrofe', label: 'Catastrofe' },
    { value: 'ciencia ficcion', label: 'Ciencia ficcion' },
    { value: 'comedia', label: 'Comedia' },
    { value: 'documentales', label: 'Documentales' },
    { value: 'drama', label: 'Drama' },
    { value: 'fantasia', label: 'Fantasia' },
    { value: 'musicales', label: 'Musicales' },
    { value: 'suspense', label: 'Suspenso' },
    { value: 'terror', label: 'Terror' },
    
    
  ];

 

  return (
    <Row className="mb-8">
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">Agregar pelicula</h4>
          <p className="mb-0 fs-5 text-muted" style={{ textAlign: 'justify' }}> La funcionalidad de "Subir Película" permite a los usuarios autorizados contribuir al catálogo de películas del sistema. 
          Esto involucra el ingreso de información esencial sobre la película para que pueda ser presentada y organizada de manera efectiva.  </p>
        </div>
      </Col>
      <Col xl={9} lg={50} md={12} xs={12}>
        <Card>
          {/* card body */}
          <Card.Body>
            {/* col */}
            <div>
              <div className="mb-6">
                <h4 className="mb-1">Detalle de la Informacion</h4>
              </div>
              {hasMounted && 
              <Form>
                {/* row  Titulo original*/}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="fullName">Titulo original </Form.Label>
                  <Col md={8} xs={12}> 
                    <Form.Control type="text" placeholder="Nombre de la pelicula" id="titulo-original" required />
                  </Col>
                </Row>
                {/* row Resmen de la pelicula*/}
                <Row className='mb-3'>
                <Form.Label className="col-sm-4" htmlFor="titulo-original">
                  Resumen de la pelicula 
                 </Form.Label>{' '}
                  <Col md={8} xs={12}>
                {/* Agrega el OverlayTrigger alrededor de tu Form.Control */}
                  <OverlayTrigger
                  trigger="hover"
                  placement="bottom"
                   overlay={
                 <Popover id="popover-basic">
                 <Popover.Header as="h3">Sugerencia</Popover.Header>
                 <Popover.Body>
                  Una breve descripción que destaca la trama o tema central de la película
                 </Popover.Body>
                 </Popover>
                  }
                 >
                 <Form.Control
                 type="texto"
                 placeholder="Resumen de la pelicula"
                 id="Resumen de la pelicula"
                  required
                 />
                </OverlayTrigger>
                 </Col>
                </Row>
                {/* fecha de distribucion*/}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="f_distribucion">fecha de distribucion</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="date" placeholder=" fecha de distribucion" id="f_distribucion" />
                  </Col>
                </Row>
                {/* Duracion del cortometraje*/}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="duracion">Duracion</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Ex: 134 min " id="d_cortometraje" />
                  </Col>
                </Row>
                {/* Distribuidor*/}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="distribuidor">Distribuidor de la pelicula</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Ex: Univesal" id="distribuidor" />
                  </Col>
                </Row>
                 {/* row  Isan*/}
                <Row className='mb-3'>
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="fullName">Isan</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Ex.tt647586960384" id="Isan" required />
                  </Col>  
                </Row>
                {/* Poster_ url*/}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="phone">Url Poster</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Url Poster" id="url_poster" />
                  </Col>
                </Row>
                
                {/* Aws_trailer*/}
                <Row className="align-items-center">
                  <Form.Label className="col-sm-4" htmlFor="zipcode">Aws trailer</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Url Trailer" id="aws_trailer" required />
                  </Col>
                  <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                    <Button variant="primary" type="submit">
                      Subir
                    </Button>
                  </Col>

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

export default AddMovie