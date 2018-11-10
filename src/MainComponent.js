import React, { Component } from 'react';
import {connect} from 'react-redux';

import { simpleAction, paginationAction } from './actions/simpleAction' 

import RowComponent from './RowComponent' 
import PaginatorComponent from './PaginatorComponent' 


const mapStateToProps = state => ({
   ...state
  });

const mapDispatchToProps = dispatch => ({
    paginationAction: page => dispatch(paginationAction(page)), 
    simpleAction : () => dispatch(simpleAction())
})   

class MainComponent extends Component {

    componentDidMount(){
        this.props.simpleAction()
    }

    render() {
        
        if(this.props.simpleReducer.result.load){
            return(

                <p>Carregando...</p>
            )
        }else{
            return (
                <div>
                     <p>{JSON.stringify(this.props.simpleReducer.result.load)}</p>
                     <table>
                     <thead>
                         <tr>
                             
                             <th>First name</th>
                             <th>Last name</th>
                             <th>Options</th>
                             <th></th>
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
                 <PaginatorComponent total={this.props.simpleReducer.result.total_pages}  current={this.props.simpleReducer.result.page} />
               </div>
             )
        } 

       }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);