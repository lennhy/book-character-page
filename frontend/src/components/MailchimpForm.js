import { useState } from "react";

export default function MailchimpForm() {
  const url = process.env.REACT_APP_MAILCHIMP_POST_URL
  const u = process.env.REACT_APP_MAILCHIMP_U
  const id = process.env.REACT_APP_MAILCHIMP_ID
  const postURL = `${process.env.REACT_APP_MAILCHIMP_POST_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`
  // console.log(postURL)
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  console.log(email)
  // const onChangeHandler = (event) => {
  //   setMyCar(event.target.value)
  // }


  return (
        <>
          <form className="mc__form">
            <h3 className="mc__title">"Unlock Tomorrow's Tale: Join the Exclusive Newsletter for Our Upcoming Novel!”</h3>
            <div className="mc__field-container">
              <label htmlFor="first-name">First Name:</label>
              <input
                id="first-name"
                onChange={e => setFirstName(e.target.value)} 
                type="text"
                value={firstName}
                placeholder="First Name"
                isrequired="true" 
              />

              <label htmlFor="last-name">First Name:</label>
              <input
                id="last-name"
                onChange={e => setLastName(e.target.value)} 
                type="text"
                value={lastName}
                placeholder="Last Name"
                isrequired="true" 
              />
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                onChange={e => setEmail(e.target.value)} 
                type="email"
                value={email}
                placeholder="your@email.com"
                isrequired="true" 
              />

              <input
                label="subscribe"
                type="submit"
                formvalues={[email, firstName, lastName]}
              />
          </div>
          </form>
      </>
      )

} 