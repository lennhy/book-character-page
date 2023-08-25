import "./flip-box.css";

export default function FlipBox() {
    return (
        <>
        <section className="page-container">
        <div className="flex-center">
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                    <h2>Children of The Pantheon</h2>
                    </div>
                    <div className="flip-box-back">
                    <p>Coming Soon. </p>
                    </div>
                </div>
            </div>
            </div>
          </section>
        </>
      )
}