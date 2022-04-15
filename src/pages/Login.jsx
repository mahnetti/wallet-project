import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../style/loginStyle.css';
import { addNewLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      enableBtn: false,
    };
  }

  handleClick = (target) => {
    target.preventDefault();
    const { history, userDispatch } = this.props;
    const { email } = this.state;
    userDispatch(email);
    history.push('/carteira');
  }

  validateLogin = () => {
    const minLength = 6;
    const { email, password } = this.state;
    const lengthPassword = password.length >= minLength;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validateEmail = emailRegex.test(email);

    // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail validação do email a partir da const

    if (validateEmail && lengthPassword) {
      this.setState({ enableBtn: true });
    } else {
      this.setState({ enableBtn: false });
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => {
      this.validateLogin();
    });
  }

  render() {
    const { email, password, enableBtn } = this.state;
    return (
      <div className="loginContainer">
        <header className="headerName">
          <img src="http://gringotesbank.weebly.com/uploads/3/1/3/5/3135981/9443522.gif?350" alt="" />
        </header>
        <form className="formName">

          <label htmlFor="email" className="labelName">
            E-mail:
            <input
              className="inputName"
              data-testid="email-input"
              type="email"
              id="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              placeholder="Your e-mail"
            />
          </label>

          <label htmlFor="password" className="labelName">
            Senha:
            <input
              className="inputName"
              data-testid="password-input"
              type="password"
              id="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
              placeholder="Password"
            />
          </label>

          <button
            className="buttonName"
            type="submit"
            id="submit-btn"
            onClick={ this.handleClick }
            disabled={ !enableBtn }
          >
            Entrar
          </button>

        </form>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userDispatch: (payload) => dispatch(addNewLogin(payload)),
});

Login.propTypes = {
  userDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
