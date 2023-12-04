
'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { Notifications, DeleteAccount, GeneralSetting, EmailSetting, Preferences, AboutMe } from 'sub-components'
import ConsultarMovie from 'sub-components/view/Solicitud/ConsultarMovie';


const page = () =>{
  return (
   
    <Container fluid className="p-6">

      {/* Page Heading */}
      <PageHeading heading="CONSULTAR SOLICITUDES" />

      {/* General Settings */}
      <ConsultarMovie />

      {/* Email Settings */}
      {/* // DONE ... <EmailSetting /> */}
      

      {/* Settings for Preferences */}
      {/* // DONE ...<Preferences /> */}

      {/* Settings for Notifications */}
      {/* <Notifications /> */}

      {/* Delete Your Account */}
      

    </Container>
  )
}

export default page