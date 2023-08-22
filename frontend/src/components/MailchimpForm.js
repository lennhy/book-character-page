export default function MailchimpForm() {
  const url = process.env.REACT_APP_MAILCHIMP_POST_URL
  const u = process.env.REACT_APP_MAILCHIMP_U
  const id = process.env.REACT_APP_MAILCHIMP_ID
  const postURL = `${process.env.REACT_APP_MAILCHIMP_POST_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`
  console.log(postURL)
  return (
        <>
        <Form className="">
          
        </Form>
        </>
      )

} 