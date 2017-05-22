
import React from 'react';
import style from '../styl/style.styl';
import Hole from './hole';
import GoodGuy from './good-guy';
import BadGuy from './bad-guy';



class Game extends React.Component {

	constructor (props) {

		super(props);

		this.holes = [];
		this.holesCount = this.props.holesCount
		this.getHoles.bind(this);

	}

	getRandomHole () {
		return Math.round(Math.random() * (this.holesCount - 1));
	}

	getHoles () {

		var i;

		for (i = 0; i < this.holesCount; i++) {

			this.holes.push(
				<Hole key={i} />
			);

		}
	}

	render () {
		console.log(this.getRandomHole());
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