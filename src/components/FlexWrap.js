import React, { useState } from 'react';
import ItemsParent from './ItemsParent';
import Option from './Option';

function FlexWrap() {
    let [style, setStyle] = useState({flexWrap: 'wrap-reverse'});

    return (
        <div className="flex-wrap tile">
            <h2>flex-wrap</h2>
            <div className="wrapper">
                <ItemsParent styles={style}>
                    <div className="item">4</div>
                </ItemsParent>
                <div className="options">
                    <Option id="flex-wrap-nowrap" propertie="nowrap" name="flex-wrap" toggleStyle={(ev) => setStyle({flexWrap: ev.target.value})} />
                    <Option id="flex-wrap-wrap" propertie="wrap" name="flex-wrap" toggleStyle={(ev) => setStyle({flexWrap: ev.target.value})} />
                    <Option id="flex-wrap-wrap-reverse" propertie="wrap-reverse" name="flex-wrap" toggleStyle={(ev) => setStyle({flexWrap: ev.target.value})} />
                </div>
            </div>
        </div>
    );
}

export default FlexWrap;
