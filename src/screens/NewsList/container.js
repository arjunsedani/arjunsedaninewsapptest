import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as newsActions, STATE_KEY as NEWS } from '../../redux/news';
import NewsList from './presenter';

const mapStateToProps = state => ({
  newsInfo: state[NEWS].news.res ? state[NEWS].news.res.data.articles : ''
  //   newsInfo: state[NEWS].dates.response ? state[NEWS].dates.response.data.monthly.Apr.A1 : ''
});

const mapActionCreators = dispatch => ({
  newsActions: {
    fetchData: bindActionCreators(newsActions.fetchData, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapActionCreators
)(NewsList);
