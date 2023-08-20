export default function IllustrationsPage() {
    const bucketFolder = "http://polyverge-images.s3-website-us-east-1.amazonaws.com/illustrations/"
    return (
        <>
          <section className="">
          <h1> Illustrations Page</h1>
          {/* Need a loop here that returns images from S3 bucket - Need to do this in the backend or will have to hard code it here */}
          <img src="https://polyverge-images.s3.amazonaws.com/thumbs/armada-thumb.jpg"/>
          <img src="https://polyverge-images.s3.amazonaws.com/thumbs/dark-side-thumb.jpg"/>
          <img src="https://polyverge-images.s3.amazonaws.com/thumbs/miko-thumb.jpg"/>
          <img src="https://polyverge-images.s3.amazonaws.com/thumbs/paralysis-thumb.jpg"/>

          </section>
        </>
      )
}