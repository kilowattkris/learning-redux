import React from 'react';
import {Provider} from 'react-redux';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';
import configureStore from './store/configureStore';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';

const store = configureStore(); //could pass initialState param, however reducers pass a default

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="about" component={AboutPage}/>
            <Route path="courses" component={CoursesPage}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;
