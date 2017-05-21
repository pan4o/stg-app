
import React from 'react';
import style from '../styl/style.styl';
import Hole from './hole';



class Game extends React.Component {

	constructor(props) {

		super(props);

		this.holes = [];
		this.getHoles.bind(this);

	}

	getHoles() {

		var i,
		count = this.props.holesCount;

		for (i = 0; i < count; i++) {

			this.holes.push(
				<Hole key={i} />
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