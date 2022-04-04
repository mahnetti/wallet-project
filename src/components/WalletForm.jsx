import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletForm extends React.Component {
  render() {
    const { optionCurr } = this.props;
    return (
      <form>

        <label htmlFor="value-input">
          Valor:
          <input
            data-testid="value-input"
            id="value-input"
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input
            data-testid="description-input"
            id="description-input"
          />
        </label>

        <label htmlFor="currency-input">
          Moeda:
          <select
            data-testid="currency-input"
            id="currency-input"
          >
            {optionCurr.map((currency) => (
              <option
                key={ currency }
                value={ currency }
              >
                { currency }
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="method-input">
          Método de pagamento:
          <select
            data-testid="method-input"
            id="method-input"
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="cartão de crédito">Cartão de crédito</option>
            <option value="cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="method-input">
          <select
            data-testid="tag-input"
            id="method-input"
          >
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>

      </form>
    );
  }
}

WalletForm.propTypes = {
  optionCurr: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  optionCurr: state.wallet.currencies,
});

export default connect(mapStateToProps, null)(WalletForm);
