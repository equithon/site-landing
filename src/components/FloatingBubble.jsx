/*
  FLOATING BUBBLE
*/

/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
// import posed from 'react-pose';

import { mediaSize } from '../site/siteTools';

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
    width: 80%;
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

// const ComponentContainerTest = posed.div({
//   default: {
//
//   },
//   moved:{
//     translate:
//   },
// })

/* --- Component --- */
class FloatingBubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offsetX: 0,
      offsetY: 0,
      scrolled: false, // eslint-disable-line
      scrollLastOffset: typeof window !== 'undefined' && window.pageYOffset // eslint-disable-line
    };

    // this.scrollTimer = setInterval(() => this.handleScroll(), 150); // only check for scroll every 150ms for performance
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.saveStateToLocalStorage.bind(this)); // eslint-disable-line
  }

  componentWillUnmount() {
    // window.removeEventListener(
    //   'scroll',
    //   () => this.setState({ scrolled: true }) // eslint-disable-line
    // );
    // clearInterval(this.scrollTimer);
  }

  // handleScroll() {
  //   const xVarianceRange = [-0.5, 0.5];	// random range of x velocity scaling on bodies
  // 	const yVarianceRange = [0.5, 1.5];		// random range of y velocity scaling on bodies
  //
  //
  //   if(this.state.scrolled) {
  //     const scrollCurOffset = typeof window !== 'undefined' && window.pageYOffset;
  //     const offsetDistance = (this.state.scrollLastOffset - scrollCurOffset) * 0.01;
  //     console.log(scrollCurOffset);
  //     console.log(offsetDistance);
  //
  //
  //     const newOffsetX = this.state.offsetX + (offsetDistance + Math.random() * (0.5 - -0.5) + -0.5);
  //     const newOffsetY = this.state.offsetY + Math.random() * (0.5 - -0.5) + -0.5;
  //
  //     this.setState({ scrollLastOffset: scrollCurOffset, offsetX: newOffsetX, offsetY: newOffsetY });
  //   }
  // }

  render() {
    return (
      <ComponentContainer
        size={this.props.size}
        backgroundColor={this.props.backgroundColor}
        color={this.props.color}
        rotate={this.props.rotate}
        pose={this.state.offsetX || this.state.offsetY ? 'moved' : 'default'}
      >
        {this.props.children}
      </ComponentContainer>
    );
  }
}

export default FloatingBubble;
