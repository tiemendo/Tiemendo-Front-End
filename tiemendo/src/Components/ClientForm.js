import React from 'react';
import NavBar from '../Components/NavBar';

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
          <div className='login-form'>
            <NavBar />
            <form className='form' onSubmit={this.handleSubmit}>
              <input className='put'
                type="text"
                name="name"
                onChange={this.changeHandler}
                placeholder="name"
                value={this.state.client.name}
              />
              <div className="baseline" />
    
              <input className='put'
                type="text"
                name="village"
                onChange={this.changeHandler}
                placeholder="Village"
                value={this.state.client.village}
              />
              <div className="baseline" />
    
              <input className='put'
                type="text"
                name="loanAmount"
                onChange={this.changeHandler}
                placeholder="Loan Amount"
                value={this.state.client.loanAmount}
              />
              <div className="baseline" />
    
              <input className='put'
                type="text"
                name="loanInitiationDate"
                onChange={this.changeHandler}
                placeholder="Loan Initiation Date"
                value={this.state.client.loanInitiationDate}
              />
              <div className="baseline" />
    
              <input className='put'
                type="date"
                name="due date"
                onChange={this.changeHandler}
                placeholder="Due Date"
                value={this.state.client.dueDate}
              />
              <div className="baseline" />
    
              <button className="client-button">Add New Client</button>
            </form>
          </div>
        );
      }
}

export default ClientForm;