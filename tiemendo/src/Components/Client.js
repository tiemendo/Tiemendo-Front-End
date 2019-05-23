import React from 'react';

const Client = props => {
    return (
        <div>
            <h3>{props.firstName}</h3>
            <h3>{props.lastName}</h3>
              <p>{props.village}</p>
              <p>{props.loanAmount}</p>
              <p>{props.loanInitiationDate}</p>
              <p>{props.dueDate}</p>
        </div>
    )
}

Client.defaultProps = {
    firstName: '',
    lastName: '',
    village: '',
    loanAmount: '',
    loanInitiationDate: '',
    dueDate: ''
};

export default Client;