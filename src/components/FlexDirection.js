import React, { useState } from 'react';
import ItemsParent from './ItemsParent';
import Option from './Option';

function FlexDirection() {
    let [style, setStyle] = useState({flexDirection: 'column-reverse'});

    return (
        <div className="flex-direction tile">
            <h2>flex-direction</h2>
            <div className="wrapper">
                <ItemsParent styles={style}/>
                <div className="options">
                    <Option id="flex-direction-row" propertie="row" name="flex-direction" toggleStyle={(ev) => setStyle({flexDirection: ev.target.value})} />
                    <Option id="flex-direction-row-reverse" propertie="row-reverse" name="flex-direction" toggleStyle={(ev) => setStyle({flexDirection: ev.target.value})} />
                    <Option id="flex-direction-column" propertie="column" name="flex-direction" toggleStyle={(ev) => setStyle({flexDirection: ev.target.value})} />
                    <Option id="flex-direction-column-reverse" propertie="column-reverse" name="flex-direction" toggleStyle={(ev) => setStyle({flexDirection: ev.target.value})} />
                </div>
            </div>
        </div>
    );
}

export default FlexDirection;
