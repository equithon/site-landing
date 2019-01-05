/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

// import { mediaSize } from '../data/siteTools';
// import FloatingBubble from "./FloatingBubble";

const ComponentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

class ScrollingSponsorPane extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bubbles: [
        { x: Math.random() * (1500 - 1000) + 1000, y: 0, vy: 0.1 },
        { x: Math.random() * (1500 - 1000) + 1000, y: 200, vy: 0.1 },
        { x: Math.random() * (1500 - 1000) + 1000, y: 400, vy: 0.1 },
        { x: Math.random() * (1500 - 1000) + 1000, y: 600, vy: 0.1 },
        { x: Math.random() * (1500 - 1000) + 1000, y: 800, vy: 0.1 },
        { x: Math.random() * (1500 - 1000) + 1000, y: 1000, vy: 0.1 },

        { x: Math.random() * (900 - 400) + 400, y: 0, vy: 0.1 },
        { x: Math.random() * (900 - 400) + 400, y: 200, vy: 0.1 },
        { x: Math.random() * (900 - 400) + 400, y: 400, vy: 0.1 },
        { x: Math.random() * (900 - 400) + 400, y: 600, vy: 0.1 },
        { x: Math.random() * (900 - 400) + 400, y: 800, vy: 0.1 },
        { x: Math.random() * (900 - 400) + 400, y: 1000, vy: 0.1 },

        { x: Math.random() * (900 - 400) + 400, y: 0, vy: 0.1 },
        { x: Math.random() * (900 - 400) + 400, y: 200, vy: 0.1 },
        { x: Math.random() * (900 - 400) + 400, y: 400, vy: 0.1 },
        { x: Math.random() * (900 - 400) + 400, y: 600, vy: 0.1 },
        { x: Math.random() * (900 - 400) + 400, y: 800, vy: 0.1 },
        { x: Math.random() * (900 - 400) + 400, y: 1000, vy: 0.1 },

        { x: Math.random() * (900 - 400) + 400, y: 0, vy: 0.1 },
        { x: Math.random() * (900 - 400) + 400, y: 200, vy: 0.1 },
        { x: Math.random() * (900 - 400) + 400, y: 400, vy: 0.1 },
        { x: Math.random() * (900 - 400) + 400, y: 600, vy: 0.1 },
        { x: Math.random() * (900 - 400) + 400, y: 800, vy: 0.1 },
        { x: Math.random() * (900 - 400) + 400, y: 1000, vy: 0.1 }
      ]
    };
  }

  componentDidMount() {
    this.animateBubbles = this.animateBubbles.bind(this);
    requestAnimationFrame(this.animateBubbles); // eslint-disable-line
  }

  animateBubbles() {
    this.setState(prevState => {
      const newBubbles = prevState.bubbles.map(bubble => {
        bubble.x -= Math.random() * (0.4 - 0.3) + 0.3; // eslint-disable-line
        bubble.y += bubble.vy; // eslint-disable-line
        bubble.vy += Math.random() * (0.01 - -0.01) + -0.01; // eslint-disable-line
        bubble.vy = Math.min(0.1, Math.max(-0.1, bubble.vy)); // eslint-disable-line
        if (bubble.x < -200) bubble.x += 2000; // eslint-disable-line
        return bubble;
      });
      return { bubbles: newBubbles };
    });

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
              width: '9em',
              height: '9em',
              borderRadius: '50%',
              backgroundColor: 'white',
              position: 'absolute',
              transform: `translate(${bubble.x}px, ${bubble.y}px)`,
              boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)',
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
