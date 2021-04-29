import React from 'react';
import '../styles/Items.css';

function ItemsChild(props) {
    return (
        <div className="items">
            <div className="item" style={props.itemStyle}>1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            {props.children}
        </div>
    );
}

export default ItemsChild;