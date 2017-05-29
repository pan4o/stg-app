
import React from 'react';
import style from '../styl/style.styl';
import Hole from './hole';
import GoodGuy from './good-guy';
import BadGuy from './bad-guy';



class Game extends React.Component {

	constructor (props) {

		super(props);

		this.holes = [];
		this.holesCount = this.props.holesCount;

		this.mansPositions = this.getRandomHole();

		this.state = {
			goodGuyPos: this.mansPositions.goodGuyPos,
			badGuyPos: this.mansPositions.badGuyPos
		}

	}

	getRandomHole () {

		var goodPos = Math.round(Math.random() * (this.holesCount - 1)),
			badPos = Math.round(Math.random() * (this.holesCount - 1));

		while (goodPos == badPos) {

			badPos = Math.round(Math.random() * (this.holesCount - 1))

		}

		return {
			goodGuyPos: goodPos,
			badGuyPos: badPos
		}

	}

	render () {

		var i, hole;

		for (i = 0; i < this.holesCount; i++) {

			if (i == this.state.goodGuyPos) {

				hole = <Hole key={i} man={<GoodGuy />} />;

			} else if (i == this.state.badGuyPos) {

				hole = <Hole key={i} man={<BadGuy />} />;

			} else {

				hole = <Hole key={i} />;

			}

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