import React from 'react';
import PropTypes from 'prop-types';
import '../style/walletStyle.css';
import { connect } from 'react-redux';
// import { fetchCurrencies } from '../actions';

class WalletHeader extends React.Component {
  // componentDidMount() {
  //   const { getCurrencies } = this.props;
  //   getCurrencies();
  // }

  render() {
    const { email, expenses } = this.props;
    console.log(expenses);
    const objectExpenses = expenses.map(
      (expense) => expense.exchangeRates[expense.currency].ask * expense.value,
    ).reduce(
      (acc, index) => Number(acc) + Number(index), 0,
    ).toFixed(2);
    return (
      <header className="walletHeader">
        <section className="titleHeader">
          <h2>GRINGOTTS</h2>
        </section>
        <div className="infoHeader">
          <p
            data-testid="email-field"
          >
            {`Email: ${email}`}
          </p>
          {' '}
          <p
            data-testid="total-field"
          >
            {`Total: ${objectExpenses}`}
          </p>
          {' '}
          <p
            data-testid="header-currency-field"
          >
            Moeda:  BRL
          </p>
        </div>
      </header>

    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.object,
}.isRequired;
// currencies: PropTypes.string.isRequired,
// getCurrencies: PropTypes.func,

// const mapDispatchToProps = (dispatch) => ({
//   getCurrencies: (currencies) => dispatch(fetchCurrencies(currencies)),
// });

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  // currencies: state.wallet.currency,
});

export default connect(mapStateToProps, null)(WalletHeader);
