import { LIST_NEWS } from './types';

export const initialState = {
  news: []
};

const reducer = (state: User = initialState, action: Action) => {
  switch (action.type) {
    case LIST_NEWS:
      return {
        ...state,
        news: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
