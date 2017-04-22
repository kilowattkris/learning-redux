import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

//used to pass loading props cause loader was used here... but now i moved it out
const Header = ({loading}) => {
  return (
    <nav className="header">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      <Link to="/about" activeClassName="active">About</Link>
      <Link to="/courses" activeClassName="active">Courses</Link>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
