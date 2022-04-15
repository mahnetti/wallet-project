import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletForm from '../components/WalletForm';
import WalletHeader from '../components/WalletHeader';
import { fetchCurrencies } from '../actions';
import TableExpenses from '../components/TableExpenses';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    return (
      <section className="containerHeader">
        <WalletHeader />
        <WalletForm />
        <TableExpenses />
      </section>
    );
  }
}

Wallet.propTypes = {
  getCurrencies: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: (currencies) => dispatch(fetchCurrencies(currencies)),
});

export default connect(null, mapDispatchToProps)(Wallet);
