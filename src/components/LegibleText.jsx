/*
  This component dynamically changes the color of the contained text based
   on the color of the background in order to make sure that the text is
   legible on the background.
*/

/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

const ComponentContainer = styled.span`
  color: ${props => (props.backgroundIsLight ? props.theme.offBlack : 'white')};
`;

const backgroundIsLight = (r, g, b) => {
  const darkness = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return darkness < 0.5;
};

/* --- Images & Other Assets --- */
/* --- Component [STATELESS] --- */
export default props => {
  const backgroundColor = [0, 0, 0];
  const lightBg = backgroundIsLight(...backgroundColor);
  return (
    <ComponentContainer backgroundIsLight={lightBg}>
      {props.children}
    </ComponentContainer>
  );
};
