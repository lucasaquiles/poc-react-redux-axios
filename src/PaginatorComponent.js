import React, { Component } from 'react';
//mport { connect } from 'react-redux';
//import { simpleAction, paginationAction } from './actions/simpleAction' 

//const mapDispatchToProps = dispatch => ({
  //  paginationAction: page => dispatch(paginationAction(page))
//})  

export default class PaginatorComponent extends Component {
    
    click = (event) => {
         
         console.log("event", event.currentTarget.getAttribute('current'));
        
        this.props.paginationAction(event.currentTarget.getAttribute('current'))
    }

    createPageList = (it) => {
        
        const url = "#";
        let list = [];
        
        for (let i = 1; i <= this.props.total; i++){
            
            list.push(<li key={i}><a href={url} onClick={this.click} current={i}>{i}</a></li>);
        }
        return list;
    }

    render() {
        console.log("coro", this.props);
        return (
            <ul className="paginador">
                 {this.createPageList()}
            </ul>
        )
    }
}
