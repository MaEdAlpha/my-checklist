import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
    return (
            <p>{props.data}</p>
    );
}

export default ListItem;