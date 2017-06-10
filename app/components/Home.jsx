import React, { Component } from 'react';

class Home extends Component {
    componentDidMount() {
        if (typeof window !== 'undefined') {
            document.body.style.background = '#F5F5F5';
        }
    }

	render() {
		return (
			<div>
                
            </div>
		);
	}
};

export default Home;
