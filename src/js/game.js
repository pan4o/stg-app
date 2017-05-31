
import React from 'react';
import style from '../styl/style.styl';
import Hole from './hole';
import GoodGuy from './good-guy';
import BadGuy from './bad-guy';



class Game extends React.Component {

	constructor (props) {

		super(props);

		this.holesCount = this.props.holesCount;
		this.gameSpeed = this.props.gameSpeed;

		this.mansPositions = this.getRandomHole();

		this.state = {
			goodGuyPos: this.mansPositions.goodGuyPos,
			badGuyPos: this.mansPositions.badGuyPos
		}

		this.interval = null;

	}

	getRandomHole () {

		var goodGuyPos = Math.round(Math.random() * (this.holesCount - 1)),
			badGuyPos = Math.round(Math.random() * (this.holesCount - 1));

		while (goodGuyPos == badGuyPos) {

			badGuyPos = Math.round(Math.random() * (this.holesCount - 1))

		}

		return {
			goodGuyPos: goodGuyPos,
			badGuyPos: badGuyPos
		}

	}

	componentDidMount () {

		var self = this,
			newState;

		this.interval = setInterval(function () {

			newState = self.getRandomHole();

			self.setState({

				goodGuyPos: newState.goodGuyPos,
				badGuyPos: newState.badGuyPos

			});

		}, this.gameSpeed)

	}

	componentWillMount () {

		clearInterval(this.interval);

	}

	render () {

		var i, hole;

		this.holes = [];

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
	holesCount: 5,
	gameSpeed: 1000
};

export default Game;