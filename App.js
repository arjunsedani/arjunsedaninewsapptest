import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
  createReduxContainer,
  createNavigationReducer,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';
import news from './src/redux/news/reducer';
import { NewsList, NewsDetail } from './src/screens';

const AppNavigator = createStackNavigator({
  NewsList: {
    navigationOptions: () => ({
      title: 'The ideal design workflow',
      headerTitleStyle: {
        color: 'black',
        fontWeight: 'bold'
      }
    }),
    screen: NewsList
  },
  NewsDetail: { screen: NewsDetail }
});

// navigation reducer for handing all types of navigators
const navReducer = createNavigationReducer(AppNavigator);

// Combine Reducer for navigation reducer with other reducer
const appReducer = combineReducers({
  nav: navReducer,
  news
});

// Note: createReactNavigationReduxMiddleware must be run before createReduxContainer
// Like thunk the following redux middleware created for react navigation
const middleware = createReactNavigationReduxMiddleware(state => state.nav);

// store combining reducer(for both navigation n another) with epics redux thunk and react-navigation middle
const store = createStore(appReducer, applyMiddleware(middleware, thunk));

// Container between AppNavigator i.e UI and redux layer for react-navigation
const App = createReduxContainer(AppNavigator);
const mapStateToProps = state => ({
  state: state.nav
});
const AppWithNavigationState = connect(mapStateToProps)(App);

export default () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);
