import React from 'react';
import './Input.css'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

const Input = () => {
    return (
        <div className='input__container'>
            <InsertEmoticonIcon />
            <input />
            <MicIcon />
        </div>
    );
};

export default Input;