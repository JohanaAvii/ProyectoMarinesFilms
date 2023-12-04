
'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { Notifications, DeleteAccount, GeneralSetting, EmailSetting, Preferences } from 'sub-components'
import AddMovie from 'sub-components/view/Movie/AddMovie';
const page = () =>{
  return (
   
    <Container fluid className="p-6">

      {/* Page Heading */}
      <PageHeading heading="SUBIR PELICULA" />

      {/* General Settings */}
      <AddMovie />

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