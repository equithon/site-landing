/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

import { sponsorsPageData } from '../site/siteData';
import { mediaSize, displaySizes } from '../site/siteTools';

/*
  CANT USE STYLED COMPONENTS
  HERE AS THE CONSTANTLY CHANGING CLASSNAMES
  WHEN THE COMPONENT RE-RENDERS MAKES THE ANIMATION
  HORRIFYINGLY SLOW, IF ANYONE KNOWS A SOLUTION
  PLEASE LET ME KNOW LOL
*/

const Bubble = styled.div`
  position: absolute;
  display: flex;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};

  border-radius: 50%;
  background-color: ${props => props.color};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
  will-change: transform;
  cursor: pointer;

  &:hover {
    z-index: 1000;

    & > div {
      opacity: 1;
      transform: translate(-50%, 5px);
    }
  }
`;

const Logo = styled.img`
  margin: auto;
  max-width: 60%;
  max-height: 60%;
`;

const SubtitleContainer = styled.div`
  position: absolute;
  bottom: -2em;
  left: 50%;
  transform: translate(-50%, -10px);
  opacity: 0;
  transition: all 500ms ease-in-out;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  padding: 5px 1vw;
  white-space: nowrap;
  background-color: #fff;
  color: #666565;
  will-change: opacity;

  ${mediaSize.tablet`
    bottom: -2.5em;
`};
`;

const ComponentContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  font-size: 1vw;
  z-index: 1;

  ${mediaSize.tablet`
  font-size: 2vw;
`};

  ${mediaSize.phone`
  font-size: 4vw;
`};
`;

class ScrollingSponsorPane extends React.Component {
  static bubblesWillCollide(bubble1, otherBubbles) {
    let willCollide = false;
    const bubble1radius = bubble1.size / 2;
    const bubble1centre = {
      x: bubble1.x + bubble1radius,
      y: bubble1.y + bubble1radius
    };

    otherBubbles.forEach(otherB => {
      if (otherB.name !== bubble1.name) {
        const bubbleRadius = otherB.size / 2;
        const bubbleCentre = {
          x: otherB.x + bubbleRadius,
          y: otherB.y + bubbleRadius
        };
        const distanceBetween = Math.sqrt(
          (bubble1centre.x - bubbleCentre.x) ** 2 +
            (bubble1centre.y - bubbleCentre.y) ** 2
        );
        willCollide =
          willCollide || distanceBetween < bubble1radius + bubbleRadius;
      }
    });

    return willCollide;
  }

  constructor(props) {
    super(props);

    this.state = { bubbles: sponsorsPageData.sponsorBubbles };
  }

  componentDidMount() {
    this.paneHeight = this.pane.clientHeight;
    this.paneWidth = this.pane.clientWidth;
    this.windowWidth = typeof window !== 'undefined' && window.innerWidth;
    this.placeAllBubbles();
    this.animateBubbles = this.animateBubbles.bind(this);
    requestAnimationFrame(this.animateBubbles); // eslint-disable-line
  }

  placeBubble(bubble, otherBubbles, offscreen = false) {
    const newBubble = bubble;
    let invalidPos = true;
    let largestPossibleX = this.paneWidth;
    do {
      let newPossibleX = offscreen
        ? Math.random() * (largestPossibleX - this.paneWidth) + this.paneWidth
        : Math.random() * largestPossibleX;
      if (this.paneWidth < displaySizes.phone) {
        newPossibleX = offscreen
          ? Math.random() * (largestPossibleX * 2 - this.paneWidth) +
            this.paneWidth
          : Math.random() * (largestPossibleX * 2);
      } else if (this.paneWidth < displaySizes.tablet) {
        newPossibleX = offscreen
          ? Math.random() * (largestPossibleX * 1.5 - this.paneWidth) +
            this.paneWidth
          : Math.random() * (largestPossibleX * 1.5);
      }

      newBubble.x = newPossibleX;
      newBubble.y = Math.random() * (this.paneHeight - bubble.size);
      invalidPos = this.constructor.bubblesWillCollide(bubble, otherBubbles);
      largestPossibleX += 1; // increase bounds for possible placement of bubble if current possibilities are not working
    } while (invalidPos);

    return newBubble;
  }

  placeAllBubbles() {
    const bubblesLeft = this.state.bubbles;
    const placedBubbles = [];
    while (bubblesLeft.length) {
      const chosenBubble = bubblesLeft.pop();
      const placedBubble = this.placeBubble(chosenBubble, placedBubbles);
      placedBubbles.push(placedBubble);
    }

    this.setState({ bubbles: placedBubbles });
  }

  calculateNewBubblePositions() {
    this.setState(prevState => {
      const newBubbles = prevState.bubbles.map(bubble => {
        let newBubble = { ...bubble };
        const oldY = newBubble.y;

        newBubble.vy += Math.random() * (0.01 - -0.01) + -0.01; // eslint-disable-line
        newBubble.vy = Math.min(0.1, Math.max(-0.1, newBubble.vy)); // eslint-disable-line
        newBubble.x -= Math.random() * (0.4 - 0.3) + 0.3; // eslint-disable-line
        newBubble.y += newBubble.vy; // eslint-disable-line

        if (newBubble.x < -400)
          newBubble = this.placeBubble(bubble, prevState.bubbles, true); // eslint-disable-line

        // only update y if new position does not collide
        const invalidPos =
          this.constructor.bubblesWillCollide(bubble, prevState.bubbles) ||
          newBubble.y < 0 ||
          newBubble.y + newBubble.size > this.paneHeight;

        if (invalidPos) {
          newBubble.y = oldY;
          newBubble.vy *= -2; // simulate 'bouncing' off another bubble
          newBubble.y += newBubble.vy; // eslint-disable-line
        }
        return newBubble;
      });

      return { bubbles: newBubbles };
    });
  }

  animateBubbles() {
    this.calculateNewBubblePositions();

    requestAnimationFrame(this.animateBubbles); // eslint-disable-line
  }

  render() {
    return (
      <ComponentContainer
        className={this.props.className}
        ref={elem => {
          this.pane = elem;
        }}
      >
        {this.state.bubbles.map(bubble => {
          const transformMovementStyle = {
            transform: `translate(${bubble.x}px, ${bubble.y}px)`
          };

          return (
            <Bubble
              key={bubble.name} // eslint-disable-line
              style={transformMovementStyle}
              size={bubble.size}
              color={bubble.backgroundColor}
              onClick={() => window.open(bubble.link, '_blank')}
            >
              <Logo src={bubble.imgSrc} alt={bubble.name} />
              <SubtitleContainer>{bubble.name}</SubtitleContainer>
            </Bubble>
          );
        })}
      </ComponentContainer>
    );
  }
}

export default ScrollingSponsorPane;
