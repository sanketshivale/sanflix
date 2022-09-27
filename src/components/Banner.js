import React, { useEffect, useState } from "react";
import axios from "../httpreq";
import requests from "../req";
import "./Banner.css";

function Banner() {
    const [movie, setMovies] = useState([]);

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
    return (
        <header className="ban" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            <div className="ban_con">
                <h1 className="ban_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="ban_buts">
                    <button className="ban_but">Play</button>
                    <button className="ban_but">My List</button>
                </div>
                <h1 className="ban_desc">{truncate(movie?.overview, 180)}</h1>


            </div>
            <div className="ban_fade"></div>

        </header>
    )
}

export default Banner;