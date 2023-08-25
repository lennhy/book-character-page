import { useState } from "react";

export default function MailchimpForm() {
  const url = process.env.REACT_APP_MAILCHIMP_POST_URL
  const u = process.env.REACT_APP_MAILCHIMP_U
  const id = process.env.REACT_APP_MAILCHIMP_ID
  const postURL = `${process.env.REACT_APP_MAILCHIMP_POST_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

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
    }
    else {
      setMessage("You are missing information")
    }
  }

  return (
        <section className="page-container">
          <form action={postURL} className="mc__form" onSubmit={handleSubmit} >
            <h3 className="mc__title">Unlock Tomorrow's Tale: Join the Exclusive Newsletter for Our Upcoming Novel!</h3>
            <div className="mc__field-container">
              <label htmlFor="first-name">First Name:</label>
              <input
                id="first-name"
                name="MERGE1"

                onChange={e => setFirstName(e.target.value)} 
                type="text"
                value={firstName}
                placeholder="First Name"
                required={true} 
              />

              <label htmlFor="last-name">First Name:</label>
              <input
                id="last-name"
                name="MERGE2"
                onChange={e => setLastName(e.target.value)} 
                type="text"
                value={lastName}
                placeholder="Last Name"
                required={true} 
              />
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="MERGE0"

                onChange={e => setEmail(e.target.value)} 
                type="email"
                value={email}
                placeholder="your@email.com"
                required={true} 
              />

              <input
                label="subscribe"
                type="submit"
                formvalues={[email, firstName, lastName]}
              />Subscribed
          </div>
          <div>{message}</div>
          </form>
      </section>
      )

} 