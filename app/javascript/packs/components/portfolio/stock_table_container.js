import { connect } from 'react-redux';
import StockTable from './stock_table';
import {fetchAllTrades} from '../../actions/trade_actions'

const msp = (state)=>{
  return {
		trades: state.entities.trades
	}
}

const mdp = (dispatch) => {
	return {
		fetchAllTrades: ()=>dispatch(fetchAllTrades())
	};
};

export default connect(msp, mdp)(StockTable);
