import React from 'react';

const Client = props => {
    return (
        <div>
            <h3>{props.name}</h3>
              <p>{props.village}</p>
              <p>{props.loanAmount}</p>
              <p>{props.loanInitiationDate}</p>
              <p>{props.dueDate}</p>
        </div>
    )
}

Client.defaultProps = {
    name: '',
    village: '',
    loanAmount: '',
    loanInitiationDate: '',
    dueDate: ''
};

export default Client;