/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
// import {
//   GoogleReCaptchaProvider,
//   GoogleReCaptcha
// } from 'react-google-recaptcha-v3';
import { mediaSize } from '../site/siteTools';

/* --- Images --- */
/* --- Styles --- */
const ComponentContainer = styled.div`
  & > div {
    position: relative;
    color: rgb(135, 135, 135);
    font-weight: 400;
    font-size: 1em;
    margin-bottom: 0.75vw;
    height: 1.5em;

    ${mediaSize.tablet`
      font-size: 0.85em;
      text-align: center;
      margin-bottom: 2vw;
    `};

    ${mediaSize.phone`

    `};
  }

  & > form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`;

const Subtitle = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: ${props => (props.show ? '1' : '0')};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: all 0.25s ease-in-out;

  ${'' /* eslint-disable */}
  color: ${props =>
    props.success
      ? props.theme.secondary
      : props.error
      ? props.theme.error
      : props.theme.offBlack};

  ${'' /* eslint-enable */}
`;

const InputBox = styled.input`
  background: none;
  border: none;
  padding: 0 1vw;
  margin: 0;

  width: 65%;
  border-radius: 500px;
  border: 2px solid rgb(136, 136, 136);
  color: ${props => props.theme.offBlack};
  font-size: inherit;
  transition: all 0.3s ease 0s;
  &:focus {
    outline: 0;
    border: 2px solid ${props => props.color};
  }

  ${mediaSize.tablet`
    width: 70%;
    padding: 0 2vw;
  `};

  ${mediaSize.phone`
    padding: 0 3vw;
  `};
`;

const InputButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;

  width: auto;
  margin-left: -3em;
  padding: 0.2vw 2vw;
  border-radius: 500px;
  font-size: inherit;
  font-weight: 600;
  cursor: pointer;

  transition: all 0.3s ease 0s;
  color: ${props => props.color};
  background-color: rgb(136, 136, 136);

  &:hover {
    background-color: ${props => props.backgroundColor};
  }

  ${mediaSize.tablet`
    width: 35%;
  `};

  ${mediaSize.phone`
  `};
`;

/* --- Component ---
This generic input component takes in the text it should display
and an action when it is clicked, and is meant to be styled by the client.
It must be passed in a click handler to function properly.
*/
class GenericButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputContents: '',
      captchaToken: '',
      submitState: 0
    };
    this.handleSubmit = props.submit;
  }

  showSubmitState(success) {
    const newSubmitState = success ? 1 : -1;
    setTimeout(() => {
      // show state for 2 seconds, then fade back
      this.setState({ submitState: newSubmitState });
      setTimeout(() => this.setState({ submitState: 0 }), 2000);
    }, 200);
  }

  render() {
    return (
      <ComponentContainer className={this.props.className}>
        {/* <GoogleReCaptchaProvider reCaptchaKey="6Ld4c4oUAAAAANRAWIebARKihGGzPkTjzz4iuIXu">
          <GoogleReCaptcha
            onVerify={token => this.setState({ captchaToken: token })}
          />
        </GoogleReCaptchaProvider> */}
        <div>
          <Subtitle show={this.state.submitState < 0} error>
            {this.props.submitError}
          </Subtitle>
          <Subtitle show={this.state.submitState > 0} success>
            {this.props.submitSuccess}
          </Subtitle>
          <Subtitle show={this.state.submitState === 0}>
            {this.props.submitText}
          </Subtitle>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            const submitReturn = this.handleSubmit(
              this.state.inputContents,
              this.state.captchaToken
            );
            this.setState({ inputContents: '' });
            this.showSubmitState(submitReturn);
          }}
        >
          <InputBox
            placeholder={this.props.placeholderText}
            onChange={e => this.setState({ inputContents: e.target.value })}
            color={this.props.backgroundColor}
            type="email"
            value={this.state.inputContents}
          />
          <InputButton
            backgroundColor={this.props.backgroundColor}
            color={this.props.color}
          >
            {this.props.buttonText}
          </InputButton>
        </form>
      </ComponentContainer>
    );
  }
}

export default GenericButton;
