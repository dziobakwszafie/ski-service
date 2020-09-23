const defaultStyles = `
font-family: Roboto, sans-serif;
font-style: normal;
font-weight: normal;
color: #000000;
line-height: 135%;`;

export const specialStyles1 = `
font-family: "FlyingLeatherneck";
`;

const typography = {
  globalStyles: defaultStyles,
  header: {
    XXL: `
        ${specialStyles1}
        font-size: 7vw;`,
    XL: `
        ${specialStyles1}
        font-size: 5vw;`,
    L: `
        ${specialStyles1}
        font-size: 10vw;`,
    M: `
        ${specialStyles1}
        font-size: 8vw;`,
    S: `
        ${specialStyles1};
        font-size: 14vw;`,
  },
  body: {
    XL: `
        ${defaultStyles}
        font-size: 1.2vw;`,
    L: `
        ${defaultStyles}
        font-size: 1.8vw;`,
    M: `
        ${defaultStyles}
        font-size: 2.8vw;`,
    S: `
        ${defaultStyles}
        font-size: 4vw;`,
  },
};

export default typography;
