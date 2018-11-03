import React, { Component } from 'react';

import {connect} from 'react-redux';
import { simpleAction } from './actions/simplesAction' 

import RowComponent from './RowComponent' 

import './App.css';

const mapStateToProps = state => ({
  
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction:() => dispatch(simpleAction())
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
                <RowComponent key={index} info={result} />
            );
          })}
              </tbody>
          </table>
          <p>Exibindo {this.props.simpleReducer.result.per_page} resultados de {this.props.simpleReducer.result.total}</p>
          
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
