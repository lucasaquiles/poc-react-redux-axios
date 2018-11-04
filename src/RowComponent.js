import React, { Component } from 'react';

export default class RowComponent extends Component {
    
    rowClick = (event) => {
        console.log("ev: ",event.currentTarget);
        this.props.paginationAction(event.currentTarget)
    }

    render(){
        
        return (
            <tr key={this.props.index} onClick={ this.rowClick }>
                  <td><img src={this.props.info.avatar} /></td>
                  <td>{this.props.info.first_name}</td>
                  <td>{this.props.info.last_name}</td>
                  <td></td>
            </tr>
            
        )
    }
}
