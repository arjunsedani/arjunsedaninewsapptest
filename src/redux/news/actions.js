import axios from 'axios';
import * as ActionTypes from './types';

const fetchData = () => {
  // eslint-disable-next-line func-names
  return function(dispatch) {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526`
      )
      .then(res => {
        dispatch({ type: ActionTypes.LIST_NEWS, payload: { res } });
      });
  };
};

export default { fetchData };
