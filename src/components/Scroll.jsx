import React from 'react';

const Scroll = (props) => {
    return (
        <div
            style={{
            overflowY: 'scroll',
            border: '1px solid black',
            height: '30em',
            width: '80em',
            marginTop: '4em'
        }}>
            {props.children}
        </div>
    )
}

export default Scroll;