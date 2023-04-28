import PropTypes from 'prop-types';
import {
  Table,
  TD,
  TableRow,
  TableBody,
  TableHead,
  TableHeaderRow,
  Wrapper,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Wrapper>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderRow>Type</TableHeaderRow>
            <TableHeaderRow>Amount</TableHeaderRow>
            <TableHeaderRow>Currency</TableHeaderRow>
          </TableRow>
        </TableHead>

        <TableBody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <TableRow key={id}>
                <TD>{type}</TD>
                <TD>{amount}</TD>
                <TD>{currency}</TD>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
