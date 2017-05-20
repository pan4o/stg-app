
import React from 'react';
import style from '../styl/style.styl';
import Hole from './hole';



class Game extends React.Component {

	constructor(props) {

		super(props);

		this.holes = [];
		this.setTopPosition.bind(this);
		this.getHoles.bind(this);

	}

	setTopPosition(holeIndex) {

		var topPosition;

		holeIndex % 2 ? topPosition = 50 : 0;

		return ({
			top: topPosition
		});

	}

	getHoles() {

		var i,
		count = this.props.holesCount;

		for (i = 0; i < count; i++) {

			this.setTopPosition();

			this.holes.push(
				<Hole key={i} topPosition={this.setTopPosition(i)} />
			);

		}
	}

	render () {

		this.getHoles();

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