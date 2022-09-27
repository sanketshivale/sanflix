import React, { useEffect, useState } from "react";
import axios from "../httpreq";
import requests from "../req";
import "./Banner.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Banner() {
    const [movie, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length) - 1]);
            return request;
           
        }
        fetchData(); 
    }, []);
    
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    const opts = {
        height: "250",
        width: "50%",
        playerVars: {

            autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(null, { tmdbId: 161 })
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                }).catch(error => console.log(error))
        }
    };
    return (
        <header className="ban" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            <div className="ban_con">
                <h1 className="ban_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="ban_buts">
                    <button onClick={()=> handleClick(movie)} className="ban_but">Play</button>
                    <button className="ban_but">My List</button>
                    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
                </div>
                <h1 className="ban_desc">{truncate(movie?.overview, 180)}</h1>
                  


            </div>

        </header>
    )
}

export default Banner;