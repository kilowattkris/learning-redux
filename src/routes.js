import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';
import ManageCoursePage from './components/courses/ManageCoursePage';

class Root extends React.Component {
  render () {
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="about" component={AboutPage}/>
            <Route path="courses" component={CoursesPage}/>
            <Route path="course" component={ManageCoursePage}/>
            <Route path="course/:id" component={ManageCoursePage}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
