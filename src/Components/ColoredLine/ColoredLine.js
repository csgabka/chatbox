import React from 'react';

const ColoredLine = (props) => (
    <hr
        style={{
            color: props.color,
            height: 2
        }}
    />
);

export default ColoredLine;
