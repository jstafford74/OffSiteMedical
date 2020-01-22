import React from "react";
import Plx from "react-plx";


import parallaxData from "./parallaxData";



function Example() {
    return (
        <>

            <Plx
                parallaxData={parallaxData}

            >
                <div style={{ height: "200vh" }}>

                    <h1 className="display-2"> How it Works</h1>
                </div>
            </Plx>


        </>
    );
}

export default Example;
