import React from 'react';
import '../styles/Option.css';

function Option(props) {
    return (
        <div className="option">
            <input type="radio" id={props.id} name={props.name} value={props.propertie} onClick={props.toggleStyle} defaultChecked />
            <label htmlFor={props.id}>{props.propertie}</label>
        </div>
    );
}

export default Option;
