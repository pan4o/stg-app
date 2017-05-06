
import React from 'react';
import style from '../styl/style.styl';
import Hole from './hole';

class Game extends React.Component {
	render () {
		return (
			<div className="game-interface">
				<Hole />
			</div>
		)
	}
}

export default Game;