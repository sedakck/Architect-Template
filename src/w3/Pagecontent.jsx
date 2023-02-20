import React from 'react'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import ProjectSection from './ProjectSection'

function Pagecontent() {
  return (
    <>
    <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
<ProjectSection/>
<AboutSection/>
<ContactSection/>
<map/>

</div>

    </>
  )
}

export default Pagecontent