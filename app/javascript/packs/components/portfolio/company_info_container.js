import { connect } from 'react-redux';
import CompanyInfo from './company_info';

const msp = (state)=>{
  return {
    tickerData: state.entities.ticker.tickerData
	}
}

const mdp = (dispatch) => {
	return {
	};
};

export default connect(msp, null)(CompanyInfo);
