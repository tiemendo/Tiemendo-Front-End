import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { getData, deleteClients } from '../actions';

class ClientList extends React.Component {
    state = {
        deleteClient: null
    };

    componentDidMount() {
        this.props.getData();
    }

    deleteClient = id => {
        this.setState({ deletingClientId: id });
        this.props.deleteClients(id);
    };

    render() {
        
        return (
          <div className="clients">
          <h2>Clients 🦸‍♀️🦸‍♂️</h2>
          {this.props.clients.map(client => (
            <div className="client-card">
              <i
                class="fas fa-times"
                onClick={() => this.deleteClient(client.id)}
              />
              <h4>{client.name}</h4>
              <p>{client.password}</p>
              {this.props.deletingClient &&
                this.state.deletingClientId === client.id && (
                  <p>Deleting Client 👋</p>
                )}
            </div>
          ))}
        </div>
      );
    }
  }

const mapStateToProps = ({ deletingClient, clients, fetchingClients}) => ({
  deleteClients,
  clients,
  fetchingClients
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData, deleteClients }
  )(ClientList)
);
    
