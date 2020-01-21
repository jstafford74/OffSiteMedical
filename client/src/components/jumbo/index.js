import React from "react";
import { Jumbotron } from "react-bootstrap";
import MainTyping from "../typed/typed"
import "./style.css";
//--
const MainJumb = () => {
    return (
        <Jumbotron fluid className="image-overlay">
            <div className="main-content">
                <h2 className="display-1">
                    MELANOSCAN</h2>
                <h1 className="display-3"> 
                THE SOLUTION FOR:
                <MainTyping />
                </h1>
            </div>
        </Jumbotron>
    )
};
export default MainJumb;

{/* <p className="display-4">Uses Modern Imaging and Analytics to Accurately Identify Elements on the Human Body</p> */ }
{/* <Example /> */ }
{/* <h1 className="display-5">The Melanoscan body scanner uses an array of 26 smartphones that are remotely configured and controlled on a secure network to simultaneously take photographs of the entire human body.</h1> */ }
{/* <br></br> */ }
{/* <h1 className="display-5"> The images are compiled, registered and translated to compensate for scale, slope and movement.  Once rendered the various metadata from patient images is assembled in key/value pairs to allow for advanced analytical techniques to identify rapidly growing spots on the human body, down to the .3mm size.</h1> */ }
{/* <Example2 /> */ }
{/* <br></br> */ }
{/* <h1 className="display-5"> Melanoma is a leading cause of death for the U.S. Military, young adults and women aged 25-30.</h1> */ }
{/* <h1 className="display-5"> Annual production of dermatologists, is limited(300/yr).  This creates a dramatic supply/demand constraint</h1> */ }
{/* <h1 className="display-5"> Each .1mm change in diameter is increases the chances of mortality by 3-4%.</h1> */ }
{/* <h1 className="display-5"> Human skin examinations are 200% less accurate than AI & ML analytical techniques. */ }
{/* </h1> */ }

{/* <h1 className="display-5">By the time a trained human catches a deadly melanoma, 3-6mm diameter, the spot has been growing for 10years</h1> */ }


