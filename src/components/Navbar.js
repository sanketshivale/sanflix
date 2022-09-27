import React, { useEffect, useState } from "react";
import "./Navbar.css";



function Navbar() {

    const [show, handleShow] = useState(false);
    
    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
        
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/NETFLIX_logo.svg/640px-NETFLIX_logo.svg.png" alt="Logo" />
            
            <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/640px-Netflix-avatar.png" alt="Logo"/>
        

        </div>
    )
}

export default Navbar;