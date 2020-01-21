


// An array of parallax effects to be applied
const parallaxData = [
    {
        start: "self",
        startOffset: "0",
        end: "self",
        endOffset: "50vh",
        easing: "easeInQuad",
        properties: [
            {
                startValue: 100,
                endValue: 0,
                property: "opacityFilter",
                unit: "vw"
            }
        ]
    },
    {
        start: "self",
        startOffset: "60vh",
        end: "self",
        endOffset: "100vh",
        easing: "easeInQuad",
        properties: [
            {
                startValue: 0,
                endValue: 0,
                property: "translateX",
                unit: "vw"
            }
        ]
    }
];

export default parallaxData;