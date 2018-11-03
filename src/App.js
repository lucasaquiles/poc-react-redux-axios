import React, { Component } from 'react';

import {connect} from 'react-redux';
import { simpleAction, pagitationAction } from './actions/simplesAction' 


import RowComponent from './RowComponent' 
import PaginatorComponent from './PaginatorComponent' 

import './App.css';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction:() => dispatch(simpleAction()),
  pagitationAction:(page) => dispatch(pagitationAction(page))
});

class App extends Component {

  componentDidMount(){
    this.props.simpleAction()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {console.log(this.props)}
          <table>
              <thead>
                <tr>
                  <th></th>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
              {this.props.simpleReducer.result.data.map((result, index) => {
            return (
                <RowComponent key={index} index={index} info={result} />
            );
          })}
              </tbody>
          </table>

          <PaginatorComponent  total={this.props.simpleReducer.result.total_pages} current={this.props.simpleReducer.result.page} />
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
