
import React from 'react';

class Hole extends React.Component {

	render () {
		return (
			<div
				className='hole'
				ref={(hole) => { this.node = hole; }}
			>
			</div>
		)
	}
}


export default Hole;