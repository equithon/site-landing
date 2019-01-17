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
    color: rgb(135, 135, 135);
    font-weight: 400;
    font-size: 1em;
    margin-bottom: 0.75vw;

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

  render() {
    let { subtitle } = this.props;
    if (this.state.submitState < 0) subtitle = this.props.submitError;
    if (this.state.submitState > 0) subtitle = this.props.submitSuccess;
    return (
      <ComponentContainer className={this.props.className}>
        {/* <GoogleReCaptchaProvider reCaptchaKey="6Ld4c4oUAAAAANRAWIebARKihGGzPkTjzz4iuIXu">
          <GoogleReCaptcha
            onVerify={token => this.setState({ captchaToken: token })}
          />
        </GoogleReCaptchaProvider> */}
        <div>{subtitle}</div>
        <form
          onSubmit={e => {
            e.preventDefault();
            const submitReturn = this.handleSubmit(
              this.state.inputContents,
              this.state.captchaToken
            );
            this.setState({ submitState: submitReturn ? 1 : -1 });
          }}
        >
          <InputBox
            placeholder={this.props.placeholderText}
            onChange={e => this.setState({ inputContents: e.target.value })}
            color={this.props.backgroundColor}
            type="email"
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
