import React from 'react'
import Navbar from '../components/navbar'
import ContactForm from '../components/contactForm'
import Footer from '../components/footer';

const ContactPage = () => {
  return (
    <div className="bg-white h-fit dark:bg-gray-800 px-4 sm:px-10 md:px-10 lg:px-40">
      <Navbar />
    <ContactForm />
    
    </div>
  );
}

export default ContactPage