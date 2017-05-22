
import React from 'react';

class Hole extends React.Component {

	render () {
		return (
			<div className='hole' style={this.props.topPosition}>
				{this.props.man}
			</div>
		)
	}
}


export default Hole;