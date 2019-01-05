import React from 'react';

const Selector = props => (
	<div className={props.activeID === props.id ? 'selector active' : 'selector'} onClick={() => props.onHandleClick()} />
);

export default Selector;
