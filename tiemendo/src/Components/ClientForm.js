import React from 'react';
import {addClient} from '../actions';
import NavBar from '../Components/NavBar';
import {connect} from 'react-redux';

class ClientForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      village: '',
      loanAmount: '',
      loanInitiationDate: '',
      dueDate: ''
    
        };
    }

    addClient = e => {
      e.preventDefault();
      const newClient = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        village: this.state.village,
        loanAmount: this.state.loanAmount,
        loanInitiationDate: this.state.loanInitiationDate,
        dueDate: this.state.dueDate
      }
      this.props.addClient(newClient);

      this.setState({
        firstName: '',
        lastName: '',
        village: '',
        loanAmount: '',
        loanInitiationDate: '',
        dueDate: ''
      })
    }
    handleInputChange = e => {
      this.setState({[e.target.name]: e.target.value})
    }
    
      render() {
        return (
          <div className='login-form'>
            <NavBar />
            <form onSubmit={this.addClient}>
              <input className='put'
                type="text"
                name="firstName"
                onChange={this.handleInputChange}
                placeholder="First Name"
                value={this.state.firstName}
              />
              <input className='put'
                type='text'
                name='lastName'
                onChange={this.handleInputChange}
                placeholder='Last Name'
                value={this.state.lastName}
                />
    
              <input className='put'
                type="text"
                name="village"
                onChange={this.handleInputChange}
                placeholder="Village"
                value={this.state.village}
              />
    
              <input className='put'
                type="text"
                name="loanAmount"
                onChange={this.handleInputChange}
                placeholder="Loan Amount"
                value={this.state.loanAmount}
              />
    
              <input className='put'
                type="date"
                name="loanInitiationDate"
                onChange={this.handleInputChange}
                placeholder="Loan Initiation Date"
                value={this.state.loanInitiationDate}
              />
    
              <input className='put'
                type="date"
                name="dueDate"
                onChange={this.handleInputChange}
                placeholder="Due Date"
                value={this.state.dueDate}
              />
    
              <button className="client-button">Add New Client</button>
            </form>
          </div>
        );
      }
}

const mapStateToProps = state => {
  return {
    addingClient: state.addingClient,
    error: state.error
  }
}

export default connect(mapStateToProps, {addClient})(ClientForm);