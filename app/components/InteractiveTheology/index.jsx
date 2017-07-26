import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { map, partial } from 'lodash';

import { setSubApp } from 'app/actions/AppActions';
import AttributesOfGod from 'app/components/InteractiveTheology/AttributesOfGod';

export const GAMES = {
    '/interactive-theology/attributes-of-god': {
        title: 'Attributes of God - Interactive Theology - Christian and Reformed App',
        name: 'Attributes of God',
        description: 'Collect all the attributes of God cards.',
        image: '/attributes-of-god-stars.png',
        component: AttributesOfGod
    }
};

class InteractiveTheology extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            game: null
        };

        this.setGame = this.setGame.bind(this);
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            const pathname = window.location.pathname;

            if (GAMES[pathname]) {
                this.setState({ game: pathname });

                document.title = GAMES[pathname].title;
            }
        }
    }

    setGame(game) {
        this.setState({ game });
        this.props.onSetSubApp(game);

        if (typeof window !== 'undefined') {
            if (GAMES[game]) {
                document.title = GAMES[game].title;
            }
        }
    }

    renderGames() {
        if (this.state.game) { return null; }

        return (
            <div className="interactive-theology__games">
                {
                    map(GAMES, (value, key) => {
                        return (
                            <Link key={key} onClick={partial(this.setGame, key)} to={key}>
                                <h2>{value.name}</h2>
                                <hr />
                                <img src={value.image} />
                            </Link>
                        );
                    })
                }
            </div>
        );
    }

    renderGame() {
        if (!this.state.game) { return null; }

        let Game;

        if (GAMES[this.state.game]) {
            Game = GAMES[this.state.game].component;
        }

        return <Game />;
    }

    render() {
        return (
            <div className="interactive-theology">
                {this.renderGames()}
                {this.renderGame()}
            </div>
        );
    }
}

const mapActionsToProps = {
    onSetSubApp: setSubApp
};

export default connect(null, mapActionsToProps)(InteractiveTheology);
