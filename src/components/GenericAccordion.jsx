/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

import { mediaSize } from '../data/siteTools';

/* --- Images --- */
import CaretIcon from '../static/img/caret.png';

/* --- Styles --- */
const ComponentContainer = styled.div`
  position: relative;
  padding: 2vw 0 3vw 0;

  color: #555657;
  transition: color 0.5s ease-in-out;

  &:hover,
  &.selected {
    filter: ${props => (props.collapsible ? 'brightness(20%)' : 'none')};
  }
`;

const AccordionLabel = styled.div`
  cursor: pointer;
  height: ${props => (props.collapsible ? '25%' : 'auto')};

  & div.label-container {
    display: inline-flex;
    align-items: center;
    position: relative;
    vertical-align: top;
    height: 100%;
    max-width: 70vw;
  }

  & div.caret {
    display: ${props => (props.collapsible ? 'inline-flex' : 'none')};
    align-items: center;
    position: relative;
    vertical-align: top;
    width: 1vw;
    height: 100%;
    margin-left: 10px;

    ${mediaSize.tablet`
      width: 1.5vw;
      margin-left: 15px;
    `};

    ${mediaSize.phone`
      width: 2vw;
      margin-left: 15px;
    `};

    & img {
      // Source: Caret Down by Wireform from the Noun Project
      max-width: 100%;
      max-height: 100%;

      transform: ${props => (props.selected ? 'rotate(180deg)' : 'rotate(0)')};
      transition: transform 0.25s ease-in-out;
    }
  }
`;

const AccordionContents = styled.div`
  transition: max-height 0.5s ease-in-out;

  max-height: ${props => (props.selected ? '10vw' : '0')};

  ${mediaSize.tablet`
    max-height: ${props => (props.selected ? '20vw' : '0')};
  `};

  ${mediaSize.phone`
    max-height: ${props => (props.selected ? '25vw' : '0')};
  `};
`;

/* --- Component ---

*/
class GenericAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.openByDefault || false
    };
  }

  render() {
    return (
      <ComponentContainer
        className={`${this.props.className} ${
          this.state.open ? 'selected' : ''
        }`}
        collapsible={this.props.collapsible}
        show={this.state.open}
      >
        <AccordionLabel
          onClick={() =>
            this.setState(prevState => ({ open: !prevState.open }))
          }
          className="label"
          selected={this.state.open}
          collapsible={this.props.collapsible}
        >
          {' '}
          {/* eslint-disable-line */}
          <div className="label-container">{this.props.label}</div>
          <div className="caret">
            <img
              src={CaretIcon}
              alt="A caret symbol used to indicate a dropdown availability."
            />
          </div>
        </AccordionLabel>
        <AccordionContents
          selected={this.state.open || !this.props.collapsible}
        >
          {this.props.children}
        </AccordionContents>
      </ComponentContainer>
    );
  }
}

export default GenericAccordion;
