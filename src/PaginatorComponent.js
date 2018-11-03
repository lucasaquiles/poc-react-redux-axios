import React, { Component } from 'react';

export default class PaginatorComponent extends Component {
    
    handlerPaginatorClick = (event) => {
        event.preventDefault();
        console.log("event", event.currentTarget.getAttribute('current'));
        
        
    }

    componentDidMount(){
        this.props.pagitationAction(2);        
    }

    createPageList = () => {
        const url = "#";
        let list = [];
        
        for (let i = 1; i <= this.props.total; i++){
            
            list.push(<li key={i}><a href={url} onClick={this.handlerPaginatorClick} current={i}>{i}</a></li>);
        }
        return list;
    }

    render() {
        return (
            <ul class="paginador">
                 {this.createPageList()}
            </ul>
        )
    }
}