import React, {Component} from 'react';
import Client from './Client'
import {getData} from '../actions';
import {connect} from 'react-redux';

class Clients extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

    render() {
        return (
          <div>
            <div className="client-list">
            {this.props.clients.map(client => (
              <div key={client.id}>
              <h3>First Name: {client.firstName}</h3>
              <h3>Last Name: {client.lastName}</h3>
              <p>village: {client.village}</p>
              <p>loanAmount: {client.loanAmount}</p>
              <p>loanInitiationDate: {client.loanInitiationDate}</p>
              <p>dueDate: {client.dueDate}</p>
             </div>
            ))}
            </div>
            </div>
      )
    }
  }

const mapStateToProps = state => {
  return {
    fetchingClients: state.fetchingClients,
    clients: state.clients
  }
}

export default connect(mapStateToProps, {getData})(Clients);
    
