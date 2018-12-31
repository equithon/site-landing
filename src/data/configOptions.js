import { css } from 'styled-components';

export const displaySizes = {
  desktop: 2160,
  tablet: 1024,
  phone: 600
};

// Iterate through the sizes and create a media template
export const mediaSize = Object.keys(displaySizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${displaySizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
