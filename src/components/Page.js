import React from 'react';
import '../styles/Page.css';

import AlignContent from './AlignContent';
import AlignItems from './AlignItems';
import Display from './Display';
import FlexDirection from './FlexDirection';
import FlexWrap from './FlexWrap';
import JustifyContent from './JustifyContent';

function Page() {
    return (
        <div className="page">
            <h1>Flexbox</h1>
            <Display />
            <FlexDirection />
            <FlexWrap />
            <JustifyContent />
            <AlignItems />
            <AlignContent />
        </div>
    );
}

export default Page;
