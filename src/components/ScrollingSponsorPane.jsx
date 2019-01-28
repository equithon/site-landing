/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

import { sponsorsPageData } from '../data/siteData';
// import FloatingBubble from "./FloatingBubble";

const ComponentContainer = styled.div`
  width: 100%;
  height: 100%;
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

    this.state = {
      bubbles: sponsorsPageData.sponsorBubbles
    };
  }

  componentDidMount() {
    this.paneHeight = this.pane.clientHeight;
    this.paneWidth = this.pane.clientWidth;
    this.windowWidth = typeof window !== 'undefined' && window.innerWidth;
    // this.placeBubbles();
    this.animateBubbles = this.animateBubbles.bind(this);
    requestAnimationFrame(this.animateBubbles); // eslint-disable-line
  }

  placeBubbles() {
    const bubblesLeft = this.state.bubbles;
    const placedBubbles = [];
    while (bubblesLeft.length) {
      const chosenBubble = bubblesLeft.pop();
      let invalidPos = false;
      do {
        chosenBubble.x = Math.random() * this.paneWidth;
        chosenBubble.y = Math.random() * (this.paneHeight - chosenBubble.size);
        invalidPos = this.constructor.bubblesWillCollide(
          chosenBubble,
          placedBubbles
        );
      } while (invalidPos);
      placedBubbles.push(chosenBubble);
    }

    this.setState({ bubbles: placedBubbles });
  }

  calculateNewBubblePositions() {
    this.setState(prevState => {
      const newBubbles = prevState.bubbles.map(bubble => {
        const newBubble = { ...bubble };
        const oldY = newBubble.y;

        newBubble.vy += Math.random() * (0.01 - -0.01) + -0.01; // eslint-disable-line
        newBubble.vy = Math.min(0.1, Math.max(-0.1, newBubble.vy)); // eslint-disable-line
        newBubble.x -= Math.random() * (0.4 - 0.3) + 0.3; // eslint-disable-line
        newBubble.y += newBubble.vy; // eslint-disable-line

        if (newBubble.x < newBubble.size * -2) newBubble.x = this.windowWidth; // eslint-disable-line

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
        {this.state.bubbles.map((bubble, i) => (
          <div
            key={i} // eslint-disable-line
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              borderRadius: '50%',
              backgroundColor: bubble.backgroundColor,
              position: 'absolute',
              transform: `translate(${bubble.x}px, ${bubble.y}px)`,
              boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.3)',
              willChange: 'transform'
            }}
          />
        ))}
      </ComponentContainer>
    );
  }
}

export default ScrollingSponsorPane;

/*



import React from 'react';
import styled from 'styled-components';

import { mediaSize } from '../data/siteTools';
import FloatingBubble from '../components/FloatingBubble';



const ComponentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`

`;

const Bubble = styled.div`
  display: inline-block;
  position: relative;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-color: black;
  left: ${props => props.posX}px;
  top: ${props => props.posY}px;
`


class ScrollingSponsorPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bubbles: [
        { name: "Facebook", logoSrc: "fb_log.png", posX: 0, posY: 0, tier: 2 },
        { name: "Google", logoSrc: "fb_log.png", posX: 20, posY: 40, tier: 2 },
        { name: "UWaterloo", logoSrc: "fb_log.png", posX: 12, posY: 94, tier: 2 },
        { name: "Feridun", logoSrc: "fb_log.png", posX: 0, posY: 40, tier: 2 },
      ]
    };

    setInterval(() => this.floatBubbles(), 20);
  }

  floatBubbles() {
    console.log('floating bubbles');
    const newBubbles = this.state.bubbles.map((bubble, i) => {
      bubble.posX -= 1;
      if(bubble.posX < -100) bubble.posX = 100;
      return bubble;
    });
    console.log(newBubbles);
    this.setState({bubbles: newBubbles});
  }

  render() {
    return (
      <ComponentContainer className={this.props.className}>
        {this.state.bubbles.map(bubble =>
          <Bubble key={bubble.name} posX={bubble.posX} posY={bubble.posY}>test</Bubble>
        )}
      </ComponentContainer>
    );
  }

}


export default ScrollingSponsorPane;



*/
