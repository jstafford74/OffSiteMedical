import React from 'react';
// import Example from "./components/example";
// import Example2 from "./components/example2";
// import Example3 from "./components/example3";
import { Jumbotron, Container } from "react-bootstrap";

import MainJumb from "./components/jumbo";
import "./styles.css";



const wrapperStyles = {
  position: "relative",
  marginTop: 200,
  height: 1000,
  overflow: "hidden",
  background: "black"
};

function App() {
  return (
    <Container>
    <MainJumb />
    </Container>



  );
}

export default App;