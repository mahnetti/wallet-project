import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  render() {
    const { email, expenses, currency } = this.props;
    return (
      <section>
        <header>
          <h2>Trybe Wallet</h2>
          <div>

            <b>E-mail:</b>
            <p
              data-testid="email-field"
            >
              { email }
            </p>

            <b>Total:</b>
            <p
              data-testid="total-field"
            >
              { expenses.reduce((acc, index) => acc + index, 0) }
            </p>

            <b>Currency:</b>
            <p
              data-testid="header-currency-field"
            >
              { currency }
            </p>

          </div>
        </header>
      </section>
    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currency: state.wallet.currency,
});

export default connect(mapStateToProps, null)(WalletHeader);
