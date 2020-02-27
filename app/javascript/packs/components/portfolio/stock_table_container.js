import { connect } from 'react-redux';
import StockTable from './stock_table';
import {fetchAllTrades} from '../../actions/trade_actions'
import { watchTicker } from '../../actions/ticker_actions';

const msp = (state)=>{
  return {
		trades: state.entities.trades,
		ticker: state.entities.ticker
	}
}

const mdp = (dispatch) => {
	return {
		fetchAllTrades: ()=>dispatch(fetchAllTrades()),
		watchTicker: (ticker)=>dispatch(watchTicker(ticker))
	};
};

export default connect(msp, mdp)(StockTable);
