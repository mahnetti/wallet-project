// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { fetchCurrencies } from '../actions/index';

// class WalletForm extends React.Component {
//   componentDidMount() {
//     const { getCurrencies } = this.props;
//     getCurrencies();
//   }

//   render() {
//     return (
//       <p
//         data-testid="currency-input"
//       />
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   expenses: state.wallet.expenses,
//   currency: state.wallet.currency,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getCurrencies: (currencies) => dispatch(fetchCurrencies(currencies)),
// });

// WalletForm.propTypes = {
//   getCurrencies: PropTypes.func,
// }.isRequired;

// export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
