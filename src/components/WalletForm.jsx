import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchExpenses } from '../actions';

const foodTag = 'Alimentação';

class WalletForm extends React.Component {
  constructor() {
    super();

    this.state = {
      // id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: foodTag,
      // expensesRates: { },
    };
  }

  handleClick = (target) => {
    target.preventDefault();
    const { addExpenses, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const objectExpenses = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
    };

    addExpenses(objectExpenses);
    this.setState({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: foodTag,
      description: '',
    });
  }
  // ta enviando o this.state para o estado global(store)

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    const { optionCurr } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <section className="formWalletName">
        <form>

          <label htmlFor="value-input" className="labelWallet">
            Valor:
            <input
              data-testid="value-input"
              id="value-input"
              name="value"
              value={ value }
              onChange={ this.handleChange }
              className="inputWallet"
            />
          </label>

          <label htmlFor="description-input" className="labelWallet">
            Descrição:
            <input
              data-testid="description-input"
              id="description-input"
              name="description"
              value={ description }
              onChange={ this.handleChange }
              className="inputWallet"

            />
          </label>

          <label htmlFor="currency-input" className="labelWallet">
            Moeda:
            <select
              data-testid="currency-input"
              id="currency-input"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              {optionCurr.map((curr) => (
                <option
                  key={ curr }
                  value={ curr }
                >
                  { curr }
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="method-input" className="labelWallet">
            Método de pagamento:
            <select
              data-testid="method-input"
              id="method-input"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="method-input" className="labelWallet">
            Categoria:
            <select
              data-testid="tag-input"
              id="tag-input"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option value="Alimentação">{foodTag}</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>

          <button
            type="submit"
            name="bttnExpenses"
            onClick={ this.handleClick }
            className="walletButton"
          >
            Adicionar Despesas
          </button>

        </form>
      </section>
    );
  }
}

WalletForm.propTypes = {
  optionCurr: PropTypes.array,
  expenses: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  optionCurr: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (expenses) => dispatch(fetchExpenses(expenses)),
});
// dispatch retorna uma action com o novo state

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
