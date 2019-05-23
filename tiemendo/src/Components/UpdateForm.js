import React from 'react';

class UpdateForm extends React.Component {
    state = {
        client: this.props.activeClient
    };

    changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
        if (ev.target.name === 'price') {
          value = parseInt(value, 10);
        }
    
        this.setState(prevState => ({
          client: {
            ...prevState.client,
            [ev.target.name]: value
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
                name="firstName"
                onChange={this.changeHandler}
                placeholder="first"
                value={this.state.client.firstName}
              />
              <input
                type='text'
                name='lastName'
                onChange={this.changeHandler}
                placeholder='last'
                value={this.state.client.lastName}
                />
    
              <input
                type="text"
                name="village"
                onChange={this.changeHandler}
                placeholder="Village"
                value={this.state.client.village}
              />
    
              <input
                type="number"
                name="loan amount"
                onChange={this.changeHandler}
                placeholder="Loan Amount"
                value={this.state.client.loanAmount}
              />
    
              <input
                type="string"
                name="loan initiation date"
                onChange={this.changeHandler}
                placeholder="Loan Initiation Date"
                value={this.state.client.loanInitiationDate}
              />
    
              <input
                type="string"
                name="due date"
                onChange={this.changeHandler}
                placeholder="Due Date"
                value={this.state.client.dueDate}
              />
    
              <button className="md-button form-button">Update Client</button>
            </form>
          </div>
        );
      }
}

export default UpdateForm;