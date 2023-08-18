import { useState, useEffect } from 'react';

const APIurl = "http://localhost:6500/topbooks"

export default function BookToMoviesList() {
    const [bookMovies, setBookMovies] = useState([]);

    useEffect(() => {
        fetch(APIurl)
        .then((res) => {
            // console.log(res.json())
            return res.json()
        })    
        .then((result)=>{
            console.log(result)
            setBookMovies(result)
            console.log(bookMovies)
        })
    }, []);
    if(bookMovies !==[]) {
    return (
        <>
          <section className="">
          <h1>IMDB & GoodReads: Top 250 Novels that were turned into Movies </h1>
          {bookMovies.map(bookMovie => (
              <div>
              <div>
              </div>
                {bookMovie.title}
                Author: {bookMovie.author}
                Review: {bookMovie.review}

              {/* Need to hav tis outside of player div because youtube Iframe will remove text after reconstructon of video when user clicks image */}
             
              </div>
            ))}
          </section>
        </>
      )
    }

} 