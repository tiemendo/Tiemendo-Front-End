import React from 'react';

class ClientForm extends React.Component {
    state = {
        client: {
            name: '',
            village: '',
            loanAmount: '',
            loanInitiationDate: '',
            dueDate: ''
        }
    };

    changeHandler = ev => {
        let value = ev.target.value;
        const name = ev.target.name;
        if (name === 'price') {
          value = parseInt(value, 10);
        }
    
        this.setState(prevState => ({
          client: {
            ...prevState.client,
            [name]: value
          }
        }));
      };
    
      handleSubmit = e => {
        e.preventDefault();
        this.props.addClient(this.state.client);
      };
    
      render() {
        return (
          <div>
            <h2>Add New Client</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="name"
                onChange={this.changeHandler}
                placeholder="name"
                value={this.state.client.name}
              />
              <div className="baseline" />
    
              <input
                type="text"
                name="village"
                onChange={this.changeHandler}
                placeholder="Village"
                value={this.state.client.village}
              />
              <div className="baseline" />
    
              <input
                type="number"
                name="loan amount"
                onChange={this.changeHandler}
                placeholder="Loan Amount"
                value={this.state.client.loanAmount}
              />
              <div className="baseline" />
    
              <input
                type="string"
                name="loan initiation date"
                onChange={this.changeHandler}
                placeholder="Loan Initiation Date"
                value={this.state.client.loanInitiationDate}
              />
              <div className="baseline" />
    
              <input
                type="string"
                name="due date"
                onChange={this.changeHandler}
                placeholder="Due Date"
                value={this.state.client.dueDate}
              />
              <div className="baseline" />
    
              <button className="md-button form-button">Add New Client</button>
            </form>
          </div>
        );
      }
}

export default ClientForm;