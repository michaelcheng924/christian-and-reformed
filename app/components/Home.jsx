import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    componentDidMount() {
        if (typeof window !== 'undefined') {
            document.body.style.background = '#333';
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            document.body.style.background = '#FFF';
        }
    }

	render() {
		return (
			<div className="home">
                <div className="home__word-section">
                    <div className="home__word">Chris·tian</div>
                    <div className="home__pronunciation">\ˈkris-chən\</div>
                    <div className="home__part-of-speech">noun</div>
                    <div>a person who has been regenerated (given new life) by God, and as a result 1) has repented, and continues to repent, of sin, and 2) trusts in Jesus Christ alone for salvation.</div>
                </div>

                <div className="home__word-section">
                    <div className="home__word">Re·formed</div>
                    <div className="home__pronunciation">\ri-ˈfȯrmd\</div>
                    <div className="home__part-of-speech">noun</div>
                    <div>a person who holds to the doctrines of the Reformation, which are generally summarized in the five Solas (Sola Scriptura, Sola Fide, Sola Gratia, Solus Christus, and Soli Deo Gloria), and more specifically summarized in the 1689 London Baptist Confession of Faith and the Westminster Confession of Faith.</div>
                </div>

                <Link to="/sitemap" className="home__sitemap">Sitemap</Link>
            </div>
		);
	}
};

export default Home;
