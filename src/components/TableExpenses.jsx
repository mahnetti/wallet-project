import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TableExpenses extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <section>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((table) => (
              <tr key={ table }>
                <td>{ table.description }</td>
                <td>{ table.tag }</td>
                <td>{ table.method }</td>
                <td>{ Number(table.value).toFixed(2) }</td>
                <td>{ table.exchangeRates[table.currency].name }</td>
                <td>{ Number(table.exchangeRates[table.currency].ask).toFixed(2) }</td>
                <td>
                  {Number(table.value * table.exchangeRates[table.currency]
                    .ask).toFixed(2) }

                </td>
                <td>Real</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

TableExpenses.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(TableExpenses);
