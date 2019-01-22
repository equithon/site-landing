/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
import { mediaSize } from '../site/siteTools';

/* --- Images --- */
/* --- Styles --- */
const ComponentContainer = styled.div`
  cursor: pointer;
  border-radius: 500px;

  display: table;
  transition: all 0.3s ease 0s;
  color: ${props => (props.outline ? props.backgroundColor : props.color)};
  background-color: ${props =>
    props.outline ? props.color : props.backgroundColor};
  box-shadow: ${props =>
    props.outline ? `inset 0px 0px 0px 3px ${props.backgroundColor}` : ''};

  &:hover {
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    box-shadow: ${props =>
      props.outline ? '' : '0px 8px 15px rgba(0, 0, 0, 0.1)'};
  }

  ${mediaSize.phone`
    box-shadow: ${props =>
      props.outline ? `inset 0px 0px 0px 2px ${props.backgroundColor}` : ''};
  `}
`;

const ContentContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: auto;
  padding: 0 3em;

  ${mediaSize.phone`
    padding: 0 2em;
  `}
`;
/* --- Component ---
This generic button component takes in the text it should display
and an action when it is clicked, and is meant to be styled by the client.
It must be passed in a click handler to function properly.
*/
class GenericButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
    this.handleClick = props.click;
  }

  render() {
    return (
      <ComponentContainer
        className={this.props.className}
        onClick={this.handleClick}
        backgroundColor={this.props.backgroundColor}
        color={this.props.color}
        outline={this.props.outline}
      >
        <ContentContainer>{this.state.text}</ContentContainer>
      </ComponentContainer>
    );
  }
}

export default GenericButton;
