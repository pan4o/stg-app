
import React from 'react';
import style from '../styl/style.styl';
import Hole from './hole';

class Game extends React.Component {
	render () {

		var holes = [];

		for (var i=0; i < this.props.count; i++) {
			holes.push(<Hole key={i} />);
		}

		return (
			<div className="game-interface">
				{holes}
			</div>
		);
	}
}

export default Game;