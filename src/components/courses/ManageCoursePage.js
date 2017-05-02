import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import {browserHistory} from 'react-router';
import CourseForm from './CourseForm';
// import {authorsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
    this.redirectToCoursesPage = this.redirectToCoursesPage.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.course.id != nextProps.course.id){ //check if it's new data, because this function fires more often than just when props update (can fire when React suspects things are about to change, and randowmly just to make sure things are still good)
      this.setState({course: Object.assign({}, nextProps.course)}); //needs to be new object
    }
  }

  redirectToCoursesPage() {
    this.setState({saving: false});
    toastr.success("Course Saved!");
    browserHistory.push('/courses');
  }

  updateCourseState(event) {
    console.log(event.target.name);
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  courseFormIsValid(){
    let formIsValid = true;
    let errors = {};

    if(this.state.course.title.length < 5){
      errors.title = 'Title must be at least 5 characters long.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveCourse(event) {
    event.preventDefault(); //use so that it doens't do any standard submit button functions

    if(!this.courseFormIsValid()){
      return;
    }
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course).then(
      () => this.redirectToCoursesPage()
    ).catch(
      error => {
        toastr.error(error);
        this.setState({saving: false});
      }
    );
  }

  render() {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={this.state.course}
        errors={this.state.errors}
        saving={this.state.saving}
        className="manage-courses"
      />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function getCourseById(courses, id){
  const course = courses.filter(course => course.id == id);
  if(course.length) return course[0]; //filter always returns array
  return null;
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  console.log(state.courses);
  const courseId = ownProps.params.id; // from the path `/course/:id`

  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if(courseId && state.courses.length > 0){
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
