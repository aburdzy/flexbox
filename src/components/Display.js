import React, { useState } from 'react';
import ItemsParent from './ItemsParent';
import Option from './Option';

function Display() {
    let [style, setStyle] = useState({display: 'flex'});

    return (
        <div className="display tile">
            <h2>display</h2>
            <div className="wrapper">
                <ItemsParent styles={style}/>
                <div className="options">
                    <Option id="display-block" propertie="block" name="display" toggleStyle={(ev) => setStyle({display: ev.target.value})} />
                    <Option id="display-flex" propertie="flex" name="display" toggleStyle={(ev) => setStyle({display: ev.target.value})} />
                </div>
            </div>
        </div>
    )
}

export default Display
