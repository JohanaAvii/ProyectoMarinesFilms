
'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { Notifications, DeleteAccount, GeneralSetting, EmailSetting, Preferences, AboutMe } from 'sub-components'
import AddUser from 'sub-components/view/User/AddUser';


const page = () =>{
  return (
   
    <Container fluid className="p-6">

      {/* Page Heading */}
      <PageHeading heading="AGREGAR USUARIO" />

      {/* General Settings */}
      <AddUser />

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