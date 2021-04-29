import React, { useState } from 'react';
import ItemsParent from './ItemsParent';
import Option from './Option';

function AlignItems() {
    let [style, setStyle] = useState({alignItems: 'baseline'});

    return (
        <div className="align-items tile">
            <h2>align-items</h2>
            <div className="wrapper">
                <ItemsParent styles={style} itemStyle={JSON.stringify(style) === JSON.stringify({alignItems: 'stretch'}) ? {height: 'auto'} : {}}/>
                <div className="options">
                    <Option id="align-items-flex-start" propertie="flex-start" name="align-items" toggleStyle={(ev) => setStyle({alignItems: ev.target.value})} />
                    <Option id="align-items-flex-end" propertie="flex-end" name="align-items" toggleStyle={(ev) => setStyle({alignItems: ev.target.value})} />
                    <Option id="align-items-center" propertie="center" name="align-items" toggleStyle={(ev) => setStyle({alignItems: ev.target.value})} />
                    <Option id="align-items-stretch" propertie="stretch" name="align-items" toggleStyle={(ev) => setStyle({alignItems: ev.target.value})} />
                    <Option id="align-items-baseline" propertie="baseline" name="align-items" toggleStyle={(ev) => setStyle({alignItems: ev.target.value})} />
                </div>
            </div>
        </div>
    );
}

export default AlignItems;
