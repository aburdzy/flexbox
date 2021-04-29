import React from 'react';
import '../styles/Items.css';

function ItemsParent(props) {
    return (
        <div className="items" style={props.styles}>
            <div className="item" style={props.itemStyle}>1</div>
            <div className="item" style={props.itemStyle}>2</div>
            <div className="item" style={props.itemStyle}>3</div>
            {props.children}
        </div>
    );
}

export default ItemsParent;