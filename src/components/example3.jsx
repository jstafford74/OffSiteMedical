import React from "react";
import Plx from "react-plx";
// import { Figure } from "react-bootstrap";
// import "images/reflection.jpg";
import parallaxData3 from "./parallaxData3";
import StLouArch from "../images/StLouArch.jpg";


function Example3() {
    return (
        <>
            {/* <Figure >
                <Figure.Image src={brightsun} className="rounded" />
            </Figure> */}
            <Plx
                parallaxData={parallaxData3}
                style={{
                    width: "100%",
                    height: 800,
                    backgroundColor: "#34ba9c",
                    position: "absolute",
                    top: 0,
                    backgroundImage:`url(${StLouArch})`,                      
                    backgroundSize: "cover",
                    opacity:1
                  }}
            >
                <div style={{height: "100vh"}}>
                    <h1 className="display-2"> Why It's Important</h1>
                </div>
            </Plx>

            
        </>
    );
}

export default Example3;
