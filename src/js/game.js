
import React from 'react';
import style from '../styl/style.styl';
import Hole from './hole';
import GoodMan from './good-guy';
import BadMan from './bad-guy';



class Game extends React.Component {

	constructor (props) {

		super(props);

		this.holesCount = this.props.holesCount;
		this.gameSpeed = this.props.gameSpeed;
		this.interval = null;

		this.state = {
			randomPosition: this.getRandomHole()
		}

	}

	getRandomHole () {

		return  Math.round(Math.random() * (this.holesCount - 1));

	}

	componentDidMount () {

		var randomHole,
			self = this;

		this.interval = setInterval(function () {

			self.setState({
				randomPosition: self.getRandomHole()
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

				if (this.state.randomPosition == i) {

					hole = <Hole key={i} man={<GoodMan />} />;

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
	gameSpeed: 2000
};

export default Game;