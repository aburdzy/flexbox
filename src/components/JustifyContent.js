import React, { useState } from 'react';
import ItemsParent from './ItemsParent';
import Option from './Option';

function JustifyContent() {
    let [style, setStyle] = useState({justifyContent: 'space-evenly'});

    return (
        <div className="justify-content tile">
            <h2>justify-content</h2>
            <div className="wrapper">
                <ItemsParent styles={style}/>
                <div className="options">
                    <Option id="justify-content-flex-start" propertie="flex-start" name="justify-content" toggleStyle={(ev) => setStyle({justifyContent: ev.target.value})} />
                    <Option id="justify-content-flex-end" propertie="flex-end" name="justify-content" toggleStyle={(ev) => setStyle({justifyContent: ev.target.value})} />
                    <Option id="justify-content-center" propertie="center" name="justify-content" toggleStyle={(ev) => setStyle({justifyContent: ev.target.value})} />
                    <Option id="justify-content-space-between" propertie="space-between" name="justify-content" toggleStyle={(ev) => setStyle({justifyContent: ev.target.value})} />
                    <Option id="justify-content-space-around" propertie="space-around" name="justify-content" toggleStyle={(ev) => setStyle({justifyContent: ev.target.value})} />
                    <Option id="justify-content-space-evenly" propertie="space-evenly" name="justify-content" toggleStyle={(ev) => setStyle({justifyContent: ev.target.value})} />
                </div>
            </div>
        </div>
    );
}

export default JustifyContent;
