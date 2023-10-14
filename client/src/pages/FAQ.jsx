import React from 'react'
import FAQhero from '../components/FAQhero'
import FAQls from '../components/FAQls';
import FAQhelp from '../components/FAQhelp'

const FAQ = () => {
  return (
    <>
    <div className='bg-[#E7E1D8]'>
      <FAQhero />
      <FAQhelp />
      <FAQls/>
      </div>
    </>
  )
}


export default FAQ
