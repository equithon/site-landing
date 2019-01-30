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
import VisibilitySensor from 'react-visibility-sensor';

import { mediaSize } from '../site/siteTools';

/* --- Styles --- */
const CounterContainer = styled.div`
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
class StatCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrolledTo: false };
  }

  handleVisibilityChange(isVisible) {
    if (isVisible) {
      this.setState({ scrolledTo: true });
    }
  }

  render() {
    return (
      <VisibilitySensor
        delayedCall
        onChange={isVisible => this.handleVisibilityChange(isVisible)}
      >
        <CounterContainer size={this.props.size} color={this.props.color}>
          <Counter>
            <CountUp
              start={this.props.countStart || 0}
              end={
                this.state.scrolledTo
                  ? this.props.countEnd || 100
                  : this.props.countStart || 0
              }
              duration={this.props.countDuration || 5}
              suffix={this.props.suffix}
              ref={countUp => {
                this.countUpRef = countUp;
              }}
            />
          </Counter>
          <Desc>{this.props.children}</Desc>
        </CounterContainer>
      </VisibilitySensor>
    );
  }
}

export default StatCounter;
