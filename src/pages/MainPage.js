import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainActionsCreators from '../actions/mainActions';

class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <button onClick={() => this.props.addTodo('Hey')}>This button</button>
        {this.props.main.todos.map((value, index) => {
          return (
            <h1 key={index}>{value}</h1>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ main }) => {
  return {
    main,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ ...mainActionsCreators }, dispatch);

MainPage.propTypes = {
  addTodo: PropTypes.func,
  main: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
