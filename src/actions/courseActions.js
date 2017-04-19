export function createCourse(course) {
  return { type: 'CREATE_COURSE', course }; //course is equivalent to {course: course} in ES6
}
