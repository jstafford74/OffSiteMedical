

const parallaxData3 = [
    
        {
          start: "self",
          startOffset: "10vw",
          end: "self",
          endOffset: "50vh",
          easing: "easeInQuad",
          properties: [
              {
                  startValue: 0.7,
                  endValue: 1,
                  property: "scaleX",
                  unit: ""
                },
                {
                  startValue: "#000000",
                  endValue: "#c0c0c0",
                  property: "backgroundColor",
                  unit: ""
                },{
                  startValue: 0.2,
                  endValue: 1,
                  property: "opacity",
                  unit: ""
                }
            ]
        },
        {
          start: "self",
          startOffset: "60vh",
          end: "self",
          endOffset: "100vh",
          easing: "easeOutQuad",
          properties: [
              {
                  startValue: 1,
                  endValue: 1,
                  property: "scaleX",
                  unit: ""
                },
                {
                  startValue: 1,
                  endValue: 0.2,
                  property: "opacity",
                  unit: ""
                }
          ]
        }
      ];
    
  export default parallaxData3;
  