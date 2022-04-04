import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { fetchCurrencies } from '../actions';

class WalletHeader extends React.Component {
  // componentDidMount() {
  //   const { getCurrencies } = this.props;
  //   getCurrencies();
  // }

  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <h2>Trybe Wallet</h2>
        <div>
          <p
            data-testid="email-field"
          >
            {`Email: ${email}`}
          </p>

          <p
            data-testid="total-field"
          >
            {`Despesas totais: ${expenses.reduce((acc, index) => acc + index, 0)}`}
          </p>

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
  expenses: PropTypes.number.isRequired,
  // currencies: PropTypes.string.isRequired,
  // getCurrencies: PropTypes.func,
};

// const mapDispatchToProps = (dispatch) => ({
//   getCurrencies: (currencies) => dispatch(fetchCurrencies(currencies)),
// });

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  // currencies: state.wallet.currency,
});

export default connect(mapStateToProps, null)(WalletHeader);
