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
          <div className="client-list">
            <h1>Clients</h1>
          {this.props.clients.map(client => {
            return(
              <Client
              key={client.id}
              name={client.name}
              village={client.village}
              loanAmount={client.loanAmount}
              loanInitiationDate={client.loanInitiationDate}
              dueDate={client.dueDate}
             />
            );
            })}
        </div>
      );
    }
  }

const mapStateToProps = state => {
  return {
    fetchingClients: state.fetchingClients,
    clients: state.clients
  }
}

export default connect(mapStateToProps, {getData})(Clients);
    
