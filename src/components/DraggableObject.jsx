import React from 'react';

function DraggableObject(props) {
    
    return (
        <div onMouseDown={props.onMouseDown} onMouseUp={props.onMouseUp}>test</div>        
    );
}

export default DraggableObject;
