import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.state = {
      course: { title: '' }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.courseRow = this.courseRow.bind(this);
  }

  onTitleChange (event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave () {
    // alert(`Saving ${this.state.course.title}`);
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  courseRow (course, index) {
    return (
      <div key={index}>
        {course.title}
      </div>
    );
  }

  render () {
    debugger;
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          onClick={this.onClickSave}
          value="Save" />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStatesToProps (state, ownProps) {
  debugger;
  return {
    courses: state.courses //courses comes from the reducer
  };
}

//export default connect(mapStatesToProps, mapDispatchToProps)(CoursesPage);
export default connect(mapStatesToProps)(CoursesPage); //connect(mapStatesToProps, mapDispatchToProps) returns a function that immediately gets called with the next param
//by ommitting mapDispatchToProps, connect injects a dispatch prop for us (props.dispatch())
