import React from 'react';
import loadgif from '../loading3.gif';

function Loading() {
    return (
        <div className="loading">
            <img src={loadgif} alt="Loading" />
        </div>
    )
}

export default Loading
