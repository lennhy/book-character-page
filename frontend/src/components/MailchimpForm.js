import { useState } from "react";
import axios from 'axios';

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

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(email)
    console.log(firstName)
    console.log(lastName)

    const data = {
      'u': process.env.REACT_APP_MAILCHIMP_U,
      'id': process.env.REACT_APP_MAILCHIMP_ID,
      'MERGE0' : email,
      'MERGE1' :firstName,
      'MERGE2' : lastName,
    };
    var formData = new FormData();

    formData.append('u', process.env.REACT_APP_MAILCHIMP_U)
    formData.append('id', process.env.REACT_APP_MAILCHIMP_ID,)
    formData.append('MERGE0', email)
    formData.append( 'MERGE1', firstName)
    formData.append( 'MERGE2', lastName)
    console.log(formData)
    // axios
    //   .post(postURL, 
    //     data, {
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json;charset=UTF-8",
    //     },
    //   })
    //   .then(({data}) => {
    //     console.log(data);
    // });

    // axios({
    //   method: 'post',
    //   mode: 'cors',
    //   url: postURL,
    //   withCredentials: false,
    //   params: formData
    // }).then(({data}) => {
    //       console.log(data);
    //   });

    // fetch
      //   body: JSON.stringify({
    //     'u': process.env.REACT_APP_MAILCHIMP_U,
    //     'id': process.env.REACT_APP_MAILCHIMP_ID,
    //     'MERGE0' : email,
    //     'MERGE1' :firstName,
    //     'MERGE2' : lastName,
    //   headers: {
    //     'Access-Control-Allow-Origin' : '*',
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // })

    fetch(postURL, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
  
    })
    // .then((response) => {
    //   return response.json()
    // })
    .then((data) => {
      console.log(data);
    });
  


  }

  return (
        <>
          <form action={postURL} className="mc__form" onSubmit={handleSubmit} >
            <h3 className="mc__title">"Unlock Tomorrow's Tale: Join the Exclusive Newsletter for Our Upcoming Novel!”</h3>
            <div className="mc__field-container">
              <label htmlFor="first-name">First Name:</label>
              <input
                id="first-name"
                name="MERGE1"

                onChange={e => setFirstName(e.target.value)} 
                type="text"
                value={firstName}
                placeholder="First Name"
                isrequired="true" 
              />

              <label htmlFor="last-name">First Name:</label>
              <input
                id="last-name"
                name="MERGE2"
                onChange={e => setLastName(e.target.value)} 
                type="text"
                value={lastName}
                placeholder="Last Name"
                isrequired="true" 
              />
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="MERGE0"

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
              />Subscribed
          </div>
          </form>
      </>
      )

} 