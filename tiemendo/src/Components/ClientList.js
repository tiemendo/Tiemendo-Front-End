import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import { getData, deleteClients, editClient} from '../actions';
import UpdateForm from './UpdateForm';

class ClientList extends React.Component {
    state = {
        deleteClient: null,
        editingClientId: null
    };

    componentDidMount() {
        this.props.getData();
    }

    deleteClient = id => {
        this.setState({ deletingClientId: id });
        this.props.deleteClients(id);
    };

    editClient = (e, client) => {
        e.preventDefault();
        this.props.editClient(client).then(() => {
            this.setState({ editingClientId: null });
        });
    };

    render() {
        if (this.props.fetchingClients)
            return (
                <div className='clients' style={{paddingTop: '35px'}}>
                    <Loader type='Puff' color='#ffffff' height='100' width='100' />
                </div>
            );
        return {
        <div className='clients'>
            <h2>Clients 🦸‍♀️🦸‍♂️</h2>
            {this.props.clients.map(client => {
                if (this.state.editingClientId === client.id) {
                return (
                    <div className="client-card">
                    <EditForm
                        client={client}
                        editClient={this.editClient}
                        editingClient={this.props.editingClient}
                />
              </div>
            );
          }
          return (
            <div className="client-card">
              <i
                class="fas fa-pencil-alt"
                onClick={() => this.setState({ editingClientId: client.id })}
              />
              <i
                class="fas fa-times"
                onClick={() => this.deleteClient(client.id)}
              />
              <h4>{client.name}</h4>
              <p>{client.village}</p>
              {this.props.deletingClient &&
                this.state.deletingClientId === client.id && (
                  <p>Deleting Client 👋</p>
                )}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({
  deletingClient,
  clients,
  fetchingClients,
  editingClient
}) => ({
  deletingClient,
  editingClient,
  clients,
  fetchingClients
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData, deleteClients, editClient }
  )(ClientList)
);
    
