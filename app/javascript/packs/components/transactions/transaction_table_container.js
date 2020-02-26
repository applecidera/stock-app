import { connect } from 'react-redux';
import TransactionTable from './transaction_table';

const msp = (state)=>{
  return {
		trades: state.entities.trades
	}
}

const mdp = (dispatch) => {
	return {
	};
};

export default connect(msp, null)(TransactionTable);
