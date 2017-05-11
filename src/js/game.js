
import React from 'react';
import style from '../styl/style.styl';
import Hole from './hole';

class Game extends React.Component {

	render () {

		var holes = [];

		for (var i=0; i < this.props.holesCount; i++) {
			holes.push(<Hole key={i} />);
		}

		return (
			<div className="game-interface">
				{holes}
			</div>
		);

	}

}

Game.defaultProps = {
	holesCount: 5
};

export default Game;