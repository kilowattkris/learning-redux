import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.state = {
      course: { title: '' }
    };

    // i need to learn how to explain the following
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.courseRow = this.courseRow.bind(this);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave(event) {
    // alert(`Saving ${this.state.course.title}`);
    // this.props.dispatch(courseActions.createCourse(this.state.course));
    // this.props.createCourse(this.state.course);
    this.props.actions.createCourse(this.state.course);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  courseRow(course, index) {
    return (
      <div key={index}>
        {course.title}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <CourseList courses={this.props.courses}/>
        {/*<h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          onClick={this.onClickSave}
          value="Save" />*/}
        <input
          type="submit"
          onClick={this.redirectToAddCoursePage}
          value="Add Course" />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired, //no longer needed now that we added the mapDispatch function
  courses: PropTypes.array.isRequired,
  // createCourse: PropTypes.func.isRequired
  actions: PropTypes.object.isRequired
};

function mapStatesToProps(state, ownProps) {
  return {
    courses: state.courses //courses comes from the reducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //createCourse: course => dispatch(courseActions.createCourse(course)) //can omit parentheses around the param course, because arrow functions don't need them if there's only one param
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStatesToProps, mapDispatchToProps)(CoursesPage);
//export default connect(mapStatesToProps)(CoursesPage); //connect(mapStatesToProps, mapDispatchToProps) returns a function that immediately gets called with the next param
//by ommitting mapDispatchToProps, connect injects a dispatch prop for us (props.dispatch())
