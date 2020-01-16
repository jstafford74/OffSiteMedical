import React from "react";
import Plx from "react-plx";
import { Figure } from "react-bootstrap";
// import "images/reflection.jpg";
import parallaxData2 from "./parallaxData2";
// import brightsun from "../images/bright_sun.jpg";


function Example2() {
    return (
        <>
            {/* <Figure >
                <Figure.Image src={brightsun} className="rounded" />
            </Figure> */}
            <Plx
                parallaxData={parallaxData2}
                style={{
                    height: "20vh",
                    width: "50vw",
                    margin: "auto",
                    color:"red"
                }}
            >
                <div style={{height: "100vh"}}>
                    <h1 className="display-2"> Why It's Important</h1>
                </div>
            </Plx>

            
        </>
    );
}

export default Example2;
