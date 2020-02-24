import { connect } from 'react-redux';
import TickerLookup from './ticker_lookup';
// import {lookupTicker} from '../../utils/iex_api_utils'

const msp = (state)=>{
  return {
	}
}

const mdp = (dispatch) => {
	return {
    // lookupTicker: lookupTicker
	};
};

export default connect(null, null)(TickerLookup);
