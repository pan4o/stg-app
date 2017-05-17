
import React from 'react';
import style from '../styl/style.styl';
import Hole from './hole';

class Game extends React.Component {

	constructor(props) {

		super(props);
		this.holes = [];

	}

	render () {

		var i,
			hole,
			count = this.props.holesCount;

		for (i = 0; i < count; i++) {

			hole = <Hole key={i} />;

			this.holes.push(hole);

		}

		return (
			<div className="game-interface">
				{this.holes}
			</div>
		);

	}

};

Game.defaultProps = {
	holesCount: 5
};

export default Game;