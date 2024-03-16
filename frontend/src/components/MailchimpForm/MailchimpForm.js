import { useState } from "react";
import "./mailchimp-form.css";

export default function MailchimpForm() {
  const url = process.env.REACT_APP_MAILCHIMP_POST_URL
  const u = process.env.REACT_APP_MAILCHIMP_U
  const id = process.env.REACT_APP_MAILCHIMP_ID
  const postURL = `${process.env.REACT_APP_MAILCHIMP_POST_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('Join our Exclusive Newsletter for Our Upcoming Novel: "What Gods Lie Below");

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(email && firstName && lastName){
      const data = {
        'u': process.env.REACT_APP_MAILCHIMP_U,
        'id': process.env.REACT_APP_MAILCHIMP_ID,
        'MERGE0' : email,
        'MERGE1' :firstName,
        'MERGE2' : lastName,
      };
      
      const formData = new FormData();
  
      formData.append('u', process.env.REACT_APP_MAILCHIMP_U)
      formData.append('id', process.env.REACT_APP_MAILCHIMP_ID,)
      formData.append('MERGE0', email)
      formData.append( 'MERGE1', firstName)
      formData.append( 'MERGE2', lastName)   
  
      fetch(postURL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      })
      .then(function(response) {
        console.log(response); 
        return response;
      }).catch(function(error) {  
        console.log('Request failed:–', error)  
      });
      setMessage("Congratulations! You're now part of our exclusive inner circle eagerly awaiting the unveiling of our upcoming novel.")
      setEmail("")
      setFirstName("")
      setLastName("")
    }
    else {
      setMessage("You are missing information")
    }
  }

  return (
        <section className="newsletter-container flex-center">
          <form action={postURL} className="mc__form" onSubmit={handleSubmit} >
            <div className="mc__field-container">
            <h3 className="mc__title">{message}</h3>

              <input
                class="form-input"
                id="first-name"
                name="MERGE1"
                onChange={e => setFirstName(e.target.value)} 
                type="text"
                value={firstName}
                placeholder="First Name"
                required={true} 
              />

              <input
                class="form-input"
                id="last-name"
                name="MERGE2"
                onChange={e => setLastName(e.target.value)} 
                type="text"
                value={lastName}
                placeholder="Last Name"
                required={true} 
              />
              <input
                class="form-input"
                id="email"
                name="MERGE0"

                onChange={e => setEmail(e.target.value)} 
                type="email"
                value={email}
                placeholder="your@email.com"
                required={true} 
              />

              <button
                class="form-input"
                id="form-button"
                label="subscribe"
                type="submit"
              >Subscribe</button>
          </div>
          </form>
      </section>
      )

} 
