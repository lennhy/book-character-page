import "../components/ImageContent/image-content.css";

export default function IllustrationsPage() {
    const bucketFolder = "http://polyverge-images.s3-website-us-east-1.amazonaws.com/illustrations/"
    return (
      <section className="page-container flex-center">

          <section className="image-gallery">
          {/* Need a loop here that returns images from S3 bucket - Need to do this in the backend or will have to hard code it here */}
          <div className="image-gallery__thumb"><img src="https://polyverge-images.s3.amazonaws.com/thumbs/armada-thumb.jpg"/></div>
          <div className="image-gallery__thumb"><img src="https://polyverge-images.s3.amazonaws.com/thumbs/dark-side-thumb.jpg"/></div>
          <div className="image-gallery__thumb"><img src="https://polyverge-images.s3.amazonaws.com/thumbs/miko-thumb.jpg"/></div>
         <div className="image-gallery__thumb"> <img src="https://polyverge-images.s3.amazonaws.com/thumbs/paralysis-thumb.jpg"/></div>

          </section>
        </section>
      )
}