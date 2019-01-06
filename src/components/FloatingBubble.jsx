/*
  FLOATING BUBBLE

*/

/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

import { mediaSize } from '../data/siteTools';

/* --- Styles --- */
const ComponentContainer = styled.div`
  display: inline-flex;
  height: ${props => props.size};
  width: ${props => props.size};

  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border-radius: 50%;

  text-align: center;
  position: relative;

  & div {
    margin: auto; // center align in flexbox
  }

  transform: ${props => `rotate(${props.rotate}deg)`};

  ${mediaSize.tablet`
    width: ${props => `calc(${props.size} * 1.2)`};
    height: ${props => `calc(${props.size} * 1.2)`};
  `} ${mediaSize.phone`
    width: ${props => `calc(${props.size} * 2.3)`};
    height: ${props => `calc(${props.size} * 2.3)`};
  `};
`;

/* --- Component --- */
const FloatingBubble = props => (
  <ComponentContainer
    size={props.size}
    backgroundColor={props.backgroundColor}
    color={props.color}
    rotate={props.rotate}
  >
    <div>{props.children}</div>
  </ComponentContainer>
);

export default FloatingBubble;
