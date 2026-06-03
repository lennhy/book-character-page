import { useRef, useState, useEffect } from "react";
import "./mailchimp-form.css";
import axios from 'axios';

export default function MailchimpForm() {
  const url = process.env.REACT_APP_MAILCHIMP_POST_URL
  const u = process.env.REACT_APP_MAILCHIMP_U
  const id = process.env.REACT_APP_MAILCHIMP_ID
  const postURL = `${process.env.REACT_APP_MAILCHIMP_POST_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('Join our exclusive newsletter for our upcoming novel: What Gods Lie Below');


   const formRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");

    script.async = true;
    script.src = "https://polyverge.kit.com/94599f7ce9/index.js";
    script.setAttribute("data-uid", "94599f7ce9");

    formRef.current.appendChild(script);
  }, []);

  return (
    <div className="newsletter-container">
      <div ref={formRef}></div>
    </div>
  );

  return <div />;



      // -------------------------- Kit Newsletter code -------------------------------
      

    
} 
