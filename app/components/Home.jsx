import React, { createClass } from 'react';
import { Link } from 'react-router';
import { APP_CARDS } from 'app/constants/home';

const Home = createClass({
	displayName: 'Home',
	
	render() {
		const { onClickUser, selectedUser, usersList } = this.props;

		return (
			<div className="home">
				{
					APP_CARDS.map(card => {
						return (
							<div key={card.title} className="home__card mdl-card mdl-shadow--2dp">
							    <div className="mdl-card__title mdl-card--expand" style={{ background: `url('${card.image}') bottom right 15% no-repeat #f1c40f` }}>
								    <h2 className="mdl-card__title-text">{card.title}</h2>
							    </div>
							    <div className="mdl-card__supporting-text">
								    {card.description}
							    </div>
							    <div className="mdl-card__actions mdl-card--border">
							    	<Link to={card.url}>
									    <div className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
									        {card.buttonText}
									    </div>
							    	</Link>
							    </div>
							</div>
						);
					})
				}
			</div>
		);
	}
});

export default Home;
