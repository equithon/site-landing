/*
  STAT_COUNTER.JS
    A counter component with a description.
    Gradually increments a number until the desired value,
    used to count up stats on a page.
*/

/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

import { mediaSize } from '../data/siteTools';

/* --- Styles --- */
const CounterContainer = styled.span`
  display: inline-grid;
  grid-template-rows: auto auto;
  grid-template-areas:
    'counter'
    'desc';
  align-items: center;

  ${mediaSize.tablet`
    max-width: 100%;
  `} ${mediaSize.phone`
    padding: 5%;
  `};

  font-size: ${props => props.size};
  color: ${props => props.color};
`;

const Counter = styled.span`
  grid-area: counter;

  ${mediaSize.tablet`
    font-size: 150%;
  `} ${mediaSize.phone`
    font-size: 250%;
    `};
`;

const Desc = styled.span`
  grid-area: desc;
  font-size: 40%;
  ${mediaSize.tablet`
    font-size: 60%;
  `} ${mediaSize.phone`
    font-size: 85%;
  `};
`;

/* --- Component --- */
const StatCounter = props => (
  <CounterContainer size={props.size} color={props.color}>
    <Counter>
      <CountUp
        start={props.countStart || 0}
        end={props.countEnd || 100}
        duration={props.countDuration || 5}
        suffix={props.suffix}
      />
    </Counter>
    <Desc>{props.children}</Desc>
  </CounterContainer>
);

export default StatCounter;
