import React from "react";
import ReactTyped from "react-typed";
import "./style.css"

const MainTyping = () => (
  <div>
    <p>
      <span>
        <ReactTyped
          strings={[
            'Accurate Skin Examinations',
            'Early Detection of Skin Disease',
            'Skin Cancer Prevention',
            'Survival.....'
          ]}
          startDelay={1000}
          typeSpeed={45}
          backSpeed={55}
          backDelay={1500}
          ReactTyped
          cursorChar="|"
          loopCount={3}
          smartBackspace
          fadeOut
         
          fadeOutDelay="2500"
        />
      </span>
    </p>
  </div>
);

export default MainTyping;
