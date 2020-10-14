import typography from './typography';

const device = {
  XXL: `@media (min-width: 1920px)`,
  XL: `@media (max-width: 1919px)`,
  L: `@media (max-width: 1366px)`,
  M: `@media (max-width: 1024px)`,
  S: `@media (max-width: 767px)`,
  XS: `@media (max-width: 640px)`,
};

export default device;

export const queryForTitle = `
${device.XXL} {
  ${typography.header.XS}
}
${device.XL} {
  ${typography.header.S}
}
${device.L} {
  ${typography.header.S}
}
${device.M} {
  ${typography.header.M}
}
${device.S} {
  ${typography.header.XL}
}
`;

export const queryForText = `
${device.XXL} {
  ${typography.body.XS}
}
${device.XL} {
  ${typography.body.S}
}
${device.L} {
  ${typography.body.S}
}
${device.M} {
  ${typography.body.M}
}
${device.S} {
  ${typography.body.M}
}
`;

export const queryForExtra = `
${device.XXL} {
  ${typography.extra.XL}
}
${device.XL} {
  ${typography.extra.XL}
}
${device.L} {
  ${typography.extra.XL}
}
${device.M} {
  ${typography.extra.XL}
}
${device.S} {
  ${typography.extra.XL}
}
`;
