/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

/* --- Images --- */
/* --- Styles --- */
const ComponentContainer = styled.div`
  cursor: pointer;

  transition: all 0.3s ease 0s;
  color: ${props => (props.outline ? props.backgroundColor : props.color)};
  background-color: ${props =>
    props.outline ? props.color : props.backgroundColor};
  box-shadow: ${props =>
    props.outline ? `inset 0px 0px 0px 4px ${props.backgroundColor}` : ''};

  &:hover {
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    box-shadow: ${props =>
      props.outline ? '' : '0px 8px 15px rgba(0, 0, 0, 0.1)'};
  }
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
        {this.state.text}
      </ComponentContainer>
    );
  }
}

export default GenericButton;
