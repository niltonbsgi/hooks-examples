import React, { useState } from 'react';

const Buttom_Hooks = () => {
    const [ buttonText, setButtonText ] = useState('Click me, please');

    return (
        <button onClick={ ()=> setButtonText('Thanks, been clicked!') }>
            { buttonText }
        </button>
    );
}

export default Buttom_Hooks;