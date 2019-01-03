/* --- Packages and Components --- */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { mediaSize } from '../data/siteTools';

const floatingAnim = () =>
  keyframes`
  from {transform:translate(1px, -3px);}
  65% {transform:translate(-2px, 3px);}
  to {transform: translate(1px, -3px);}
`;

const ComponentContainer = styled.div`
  display: inline-block;
  position: relative;
  background-color: ${props => props.backgroundColor};
  padding: 2em;
  border-radius: 50%;

  animation-name: ${floatingAnim};
  animation-duration: ${props => props.duration || 6}s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  ${mediaSize.tablet`
    padding: 3em;
  `}
`;

const ContentContainer = styled.div`
  top: -5px; // elements naturally feel lower, so to counteract that
  position: relative;
  /*
    padding: 60% 10%;
    margin-top: -0.6em;

    &:after {
      content: '';
      background-color: ${props => props.backgroundColor};
      border-radius: 50%;
      position: absolute;
      top: 0; left: 0;
      width: 120%;
      padding-bottom: 120%;
      z-index: -1;
    }
  */
`;

export default props => (
  // for momentum scrolling ? https://codepen.io/popmotion/pen/dmWWdp
  <ComponentContainer backgroundColor={props.backgroundColor}>
    <ContentContainer>{props.children}</ContentContainer>
  </ComponentContainer>
);
