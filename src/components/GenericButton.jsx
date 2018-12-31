/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';

/* --- Images --- */
/* --- Styles --- */
const ButtonContainer = styled.div`
  cursor: pointer;

  transition: all 0.3s ease 0s;

  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
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
      <ButtonContainer
        className={this.props.className}
        onClick={this.handleClick}
      >
        {this.state.text}
      </ButtonContainer>
    );
  }
}

export default GenericButton;
