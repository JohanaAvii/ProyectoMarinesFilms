
'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { Notifications, DeleteAccount, GeneralSetting, EmailSetting, Preferences } from 'sub-components'
import ConsultarMovie from 'sub-components/view/Movie/ConsultarMovie';

const page = () =>{
  return (
   
    <Container fluid className="p-6">

      {/* Page Heading */}
      <PageHeading heading="CONSULTAR PELICULA" />

      {/* Consultar movie */}
      <ConsultarMovie />

      
      

    </Container>
  )
}

export default page