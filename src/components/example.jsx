import React from "react";
import Plx from "react-plx";
import { Figure } from "react-bootstrap";

import parallaxData from "./parallaxData";
import reflection from "../images/reflection.jpg";


function Example() {
    return (
        <>

            <Plx
                parallaxData={parallaxData}
                style={{
                    height: "20vh",
                    width: "50vw",
                    margin: "auto",
                }}
            >
                <div style={{ height: "100vh" }}>
                    {/* <Figure >
                        <Figure.Image src={reflection} className="rounded" />
                    </Figure> */}
                    <h1 className="display-2"> How it Works</h1>
                </div>
            </Plx>


        </>
    );
}

export default Example;
