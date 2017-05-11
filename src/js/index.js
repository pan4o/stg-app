import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game';

ReactDOM.render(
	<Game count={5} />,
	document.getElementById('root')
);