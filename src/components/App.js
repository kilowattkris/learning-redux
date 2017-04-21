//This component handles the app template used on every page
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

class App extends React.Component{
  render () {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading} />
        <section className="main-content">
          {this.props.children}
        </section>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(ajaxStatusActions, dispatch)
//   };
// }

export default connect(mapStateToProps)(App);
