const defaultStyles = `
font-family: Roboto, sans-serif;
font-style: normal;
font-weight: normal;
color: #000000;
line-height: 135%;`;

export const specialStyles1 = `
font-family: "FlyingLeatherneck";
`;
export const specialStyles2 = `
font-family: "Aeronaves";
`;

const typography = {
  globalStyles: defaultStyles,
  header: {
    XXL: `
        ${specialStyles1}
        font-size: 14vw;
        -webkit-text-stroke: 1px black;
        `,
    XL: `
        ${specialStyles1}
        font-size: 10vw;
        -webkit-text-stroke: 1px black;
        `,
    L: `
        ${specialStyles1}
        font-size: 8vw;
        -webkit-text-stroke: 1px black;
        `,
    M: `
        ${specialStyles1}
        font-size: 7vw;
        -webkit-text-stroke: 1px black;
        `,
    S: `
        ${specialStyles1};
        font-size: 5vw;
        -webkit-text-stroke: 1px black;
        `,
    XS: `
        ${specialStyles1};
        font-size: 4vw;
        -webkit-text-stroke: 1px black;
        `,
  },
  body: {
    XL: `
        ${defaultStyles}
        font-size: 4vw;`,
    L: `
        ${defaultStyles}
        font-size: 3.5vw;`,
    M: `
        ${defaultStyles}
        font-size: 2.8vw;`,
    S: `
        ${defaultStyles}
        font-size: 1.6vw;`,
    XS: `
        ${defaultStyles}
        font-size: 1.2vw;`,
  },
  extra: {
    XL: `
        ${specialStyles2}
        font-size: 8vw;`,
    L: `
        ${specialStyles2}
        font-size: 7vw;`,
    M: `
        ${specialStyles2}
        font-size: 6vw;`,
    S: `
        ${specialStyles2}
        font-size: 5vw;`,
    XS: `
        ${specialStyles2}
        font-size: 4vw;`,
  },
};

export default typography;
