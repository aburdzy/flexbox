import React, { useState } from 'react';
import ItemsParent from './ItemsParent';
import Option from './Option';

function AlignContent() {
    let [style, setStyle] = useState({alignContent: 'space-around', flexWrap: 'wrap'});

    return (
        <div className="align-content tile">
            <h2>align-content</h2>
            <div className="wrapper">
                <ItemsParent styles={style} itemStyle={JSON.stringify(style) === JSON.stringify({alignContent: 'stretch', flexWrap: 'wrap'}) ? {height: 'auto'} : {}}>
                    <div className="item" style={JSON.stringify(style) === JSON.stringify({alignContent: 'stretch', flexWrap: 'wrap'}) ? {height: 'auto'} : {}}>4</div>
                    <div className="item" style={JSON.stringify(style) === JSON.stringify({alignContent: 'stretch', flexWrap: 'wrap'}) ? {height: 'auto'} : {}}>5</div>
                    <div className="item" style={JSON.stringify(style) === JSON.stringify({alignContent: 'stretch', flexWrap: 'wrap'}) ? {height: 'auto'} : {}}>6</div>
                    <div className="item" style={JSON.stringify(style) === JSON.stringify({alignContent: 'stretch', flexWrap: 'wrap'}) ? {height: 'auto'} : {}}>7</div>
                </ItemsParent>
                <div className="options">
                    <Option id="align-content-flex-start" propertie="flex-start" name="align-content" toggleStyle={(ev) => setStyle({alignContent: ev.target.value, flexWrap: 'wrap'})} />
                    <Option id="align-content-flex-end" propertie="flex-end" name="align-content" toggleStyle={(ev) => setStyle({alignContent: ev.target.value, flexWrap: 'wrap'})} />
                    <Option id="align-content-center" propertie="center" name="align-content" toggleStyle={(ev) => setStyle({alignContent: ev.target.value, flexWrap: 'wrap'})} />
                    <Option id="align-content-space-between" propertie="space-between" name="align-content" toggleStyle={(ev) => setStyle({alignContent: ev.target.value, flexWrap: 'wrap'})} />
                    <Option id="align-content-stretch" propertie="stretch" name="align-content" toggleStyle={(ev) => setStyle({alignContent: ev.target.value, flexWrap: 'wrap'})} />
                    <Option id="align-content-space-around" propertie="space-around" name="align-content" toggleStyle={(ev) => setStyle({alignContent: ev.target.value, flexWrap: 'wrap'})} />
                </div>
            </div>
        </div>
    );
}

export default AlignContent;
