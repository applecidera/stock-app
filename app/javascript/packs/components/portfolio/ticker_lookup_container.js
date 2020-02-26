import { connect } from 'react-redux';
import TickerLookup from './ticker_lookup';
import { fetchTicker, watchTicker } from '../../actions/ticker_actions'

const msp = (state)=>{
  return {
	}
}

const mdp = (dispatch) => {
	return {
		lookupTicker: (ticker) => dispatch(fetchTicker(ticker)),
		watchTicker: (ticker) => dispatch(watchTicker(ticker))
	};
};

export default connect(null, mdp)(TickerLookup);


