import React, { Component } from 'react';
import './ClearButton.css';

const ClearButton = props =>
(
<div className='clear-btn' onClick={()=> props.handleClick()}
>
    
    {props.children}</div>

);

export default ClearButton;