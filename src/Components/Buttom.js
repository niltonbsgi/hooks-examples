import React from 'react';

class Button extends React.Component{
    state={
        buttonText: 'Click me, please'
    }

    render(){

        const { buttonText } = this.state

        return (
            <button onClick={ ()=> this.setState({...this.state, buttonText:'Thanks, been clicked!' }) }>
                { buttonText }
            </button>
        )
    }

}

export default Button;