import React from 'react';
import {addClient} from '../actions';
import NavBar from '../Components/NavBar';
import {connect} from 'react-redux';

class ClientForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      village: '',
      loanAmount: '',
      loanInitiationDate: '',
      dueDate: ''
    
        };
    }

    addClient = e => {
      e.preventDefault();
      const newClient = {
        name: this.state.name,
        village: this.state.village,
        loanAmount: this.state.loanAmount,
        loanInitiationDate: this.state.loanInitiationDate,
        dueDate: this.state.dueDate
      }
      this.props.addClient(newClient);

      this.setState({
        name: '',
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
                name="name"
                onChange={this.handleInputChange}
                placeholder="name"
                value={this.state.name}
              />
              <div className="baseline" />
    
              <input className='put'
                type="text"
                name="village"
                onChange={this.handleInputChange}
                placeholder="Village"
                value={this.state.village}
              />
              <div className="baseline" />
    
              <input className='put'
                type="text"
                name="loanAmount"
                onChange={this.handleInputChange}
                placeholder="Loan Amount"
                value={this.state.loanAmount}
              />
              <div className="baseline" />
    
              <input className='put'
                type="date"
                name="loanInitiationDate"
                onChange={this.handleInputChange}
                placeholder="Loan Initiation Date"
                value={this.state.loanInitiationDate}
              />
              <div className="baseline" />
    
              <input className='put'
                type="date"
                name="dueDate"
                onChange={this.handleInputChange}
                placeholder="Due Date"
                value={this.state.dueDate}
              />
              <div className="baseline" />
    
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