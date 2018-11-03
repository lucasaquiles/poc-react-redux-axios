import React, { Component } from 'react';

export default class RowComponent extends Component {
    
    render(){
        
        {console.log("obj", this)}
        return (
            <tr key={this.props.key}>
                  <td><img src={this.props.info.avatar} /></td>
                  <td>{this.props.info.first_name}</td>
                  <td>{this.props.info.last_name}</td>
            </tr>
            
        )
    }
}
