import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import MainTyping from "../typed/typed"
import Example from "../example";

import StickyText from '../StickyText';



const MainJumb = () => {
    return (
        <Jumbotron fluid>
            <Row >
                <Col
                    className="display-1">
                    MELANOSCAN
            </Col>
            </Row>
            <Row>
                <Col
                    className="display-3">
                    THE SOLUTION FOR:
                <MainTyping />

                </Col>
            </Row>

            <div className='StickyText-trigger' />
            <StickyText />

            <Example />
            <h1 className="display-5">The Melanoscan body scanner uses an array of 26 smartphones that are remotely configured and controlled on a secure network to simultaneously take photographs of the entire human body.</h1>
            <br></br>
        </Jumbotron >

    )
};

export default MainJumb;
