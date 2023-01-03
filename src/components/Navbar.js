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
            <img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAACACAMAAABa1od4AAAAwFBMVEX6+vqwAADkAAD6+vj///+mAACrAADKioz7/f3nAADfAADjxsX129vu3NyuEhH27++tCwmgAAD07+u2AADWAACbAAOOAAT3///y5+bBAADt0tDagH+wAAfmvLzffXvNAADkPTfst7nfcXTqq6fYRUTdFhbmmZbcYWDvycmKAAvXMzPefIDdKyzii43nSUrcqqmXFhWKFxfKJieACAyXOz7SS0mUNDSXISeoEhvfVFSuNDO0Pz+xRka7VVe9bG66dHU/bUANAAADCElEQVR4nO2bW2/iMBBGnTg2Y1M2GGIHKJRtC23TG+x2L+1e//+/2lxtpF3tQ/uAMprzhFwh5Wg+j8cRZYwgCIIgCIIgCIIgCIIgCIIgCIIgCIJ4LRD471rf4AxOArxdTUee2VEf7y1wnsx1phuyBavl8qEYt4jBsZ/w1ZRq09hzmtSLMBRRixwkR37CV1OqyUx1ahmvt5ZXWy77rWbmXi1eVWochm3Nlj2vmpnq1k3ps7xayzu1vgdSyHWnFr8fASo1MfWJ1OfAy/MAjZq0YbNdAMOkFtl1KNuMASY1c5DIy5xhUpNWe7cNHDT//qtFNhxt2xPApbYMw9ZVjkptbLVXu05LNYlGTTqfSLW9ATTjcaVmTaem9RWeyb/SsIVPpLotBy1EauIgkdkClZp0ogtkHN/lQ4NHLbIuDFv3DJWaKcKprVdDK/GoCWdi7/awcAKPWtkjM39qP+72RuJRM8W06/9an32wiNSECxdS9fHJColHzRb+FYlWzhk8VZOmiELZxoXFU7UqkWH8X5eJxKMmnVt7NW3bROJQs06GskVF0/5RqEXGOf+KRK1RqQn76XOsQyLr9o9DTdovu1C2aVM2HGqR+ToLF9LsyeJRk2afnvlAxmVXQaMWiT1bhbIt6+kfiZrcT2Yb3/4zZxGpPU/gTsfNvU3HY4dHLXpO8yqRTSjVvNpsWNTepZzfloN/m8hqjMSjBvDgN1ssLCK1CYOTrHtHUicSkRrjm67/K23HqNTyy3C0jS0etZTxfLH1c+TcSjxqnLPJdZgjDS61g0TGU4FJjcNs68u2NpjUykbyEt7+o6oag/w8nNpzMejtL3T/DiSHNFPtbVtlFpFatXjqX5EoVIFkDA4upHMkarJVmz2qBq2y/qoxSMzy+dv3Hz9//vo94E0gYXdxcf2y2dzeb/VDf/da6bEajiaTBJLEFwhyAODpaLTa3Rzz6d4Eb/8Tg1fZ5GG5/lx2y7y3RauA2qF0OVDr/gCM//tLfQKBAkEQBEEQBEEQBEEQBEEQBEEQBEEQveUPcvo1oYwBIbEAAAAASUVORK5CYII=" alt="Logo" />
            
            <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/640px-Netflix-avatar.png" alt="Logo"/>
        

        </div>
    )
}

export default Navbar;