import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { every, find, partial, some } from 'lodash';
import css from 'classnames';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Forward from 'material-ui/svg-icons/content/forward';

import { setApp, setSubApp } from 'app/actions/AppActions';
import { ANSWERS_DATABASE, ANSWERS_DATABASE_MAP } from 'app/components/AnswersDatabase/constants';

const TAGS = [
    {
        name: 'Abortion',
        code: 'abortion'
    },
    {
        name: 'Bible (internal)',
        code: 'bible-internal'
    },
    {
        name: 'Bible (external)',
        code: 'bible-external'
    },
    {
        name: 'Calvinism',
        code: 'calvinism'
    },
    {
        name: 'Creation',
        code: 'creation'
    },
    {
        name: 'Homosexuality',
        code: 'homosexuality'
    },
    {
        name: 'Is God good?',
        code: 'is-god-good'
    }
]

class AnswersDatabase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: ANSWERS_DATABASE,
            filterChanged: false,
            search: ''
        };

        this.onBackClick = this.onBackClick.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.setSearch = this.setSearch.bind(this);
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            const pathname = window.location.pathname;

            if (ANSWERS_DATABASE_MAP[pathname]) {
                this.props.onSetSubApp(pathname);

                document.title = `${ANSWERS_DATABASE_MAP[pathname].title} - Christian and Reformed App`;
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { filterChanged, search } = this.state;

        if (filterChanged !== prevState.filterChanged || search !== prevState.search) {
            if (!search && !this.hasFilter()) {
                this.setState({ results: ANSWERS_DATABASE });
            } else {
                this.setState({
                    results: ANSWERS_DATABASE.filter(result => {
                        const isSearchValid = this.isSearchValid(result);

                        return this.hasFilter() ? isSearchValid && this.shouldShowTags(result) : isSearchValid;
                    })
                });
            }
        }
    }

    onBackClick() {
        this.props.onSetSubApp(null);

        if (this.props.app === '/') {
            this.props.onSetApp('/answers-database');
        }
    }

    isSearchValid(result) {
        if (!this.state.search) { return true; }

        const splitTitle = result.title.toLowerCase().split(' ');
        const target = splitTitle.concat(result.tags);
        const splitSearch = this.state.search.toLowerCase().split(' ');

        return every(splitSearch, searchWord => {
            return some(target, targetWord => {
                return targetWord.indexOf(searchWord) !== -1;
            });
        });
    }

    onSelect(url) {
        if (typeof window !== 'undefined') {
            if (ANSWERS_DATABASE_MAP[url]) {
                this.props.onSetSubApp(url);

                document.title = `${ANSWERS_DATABASE_MAP[url].title} - Christian and Reformed App`;
            }
        }
    }

    setSearch(event) {
        this.setState({ search: event.target.value });
    }

    hasFilter() {
        return some(TAGS, tag => this.state[tag.code]);
    }

    shouldShowTags(result) {
        return some(result.tags, tag => this.state[tag])
    }

    onFilter(tag) {
        this.setState({
            [tag.code]: !this.state[tag.code],
            filterChanged: !this.state.filterChanged
        });
    }

    renderFindSection() {
        return (
            <div className="answers-database__find-section">
                <h3>Search and Filter Database</h3>
                <TextField
                    className="answers-database__search-input"
                    hintText="Search"
                    hintStyle={{ color: '#EF6C00', fontWeight: 300 }}
                    onChange={this.setSearch}
                    style={{ fontWeight: 300 }}
                    underlineFocusStyle={{ borderColor: '#E65100' }}
                    underlineStyle={{ borderColor: '#EF6C00' }}
                />
                <h4 className="answers-database__filters-header">Filters:</h4>
                <div className="answers-database__filters">
                    {
                        TAGS.map(tag => {
                            const classNames = css(`answers-database__result-tag answers-database__result-tag--${tag.code}`, {
                                'answers-database__result-tag--active': this.state[tag.code]
                            });

                            return (
                                <div
                                    key={tag.name}
                                    className={classNames}
                                    onClick={partial(this.onFilter, tag)}
                                >
                                    {tag.name}
                                </div>
                            );
                        })
                    }
                </div>
                <div className="answers-database__results-count"><strong>{this.state.results.length}</strong> {this.state.results.length === 1 ? 'result' : 'results'}</div>
            </div>
        );
    }

    renderResultTags(tags) {
        return (
            <div className="answers-database__result-tags">
                {
                    tags.map(tag => {
                        return (
                            <div key={tag} className={`answers-database__result-tag answers-database__result-tag--active answers-database__result-tag--${tag}`}>
                                {find(TAGS, globalTag => globalTag.code === tag).name}
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    renderContent() {
        const selection = ANSWERS_DATABASE_MAP[this.props.subApp] || {};

        const selectionClassNames = css('answers-database__selection', {
            'answers-database__selection--show': this.props.subApp
        });

        const resultsClassNames = css('answers-database__results', {
            'answers-database__results--hide': this.props.subApp
        });

        return (
            <div className="answers-database__content">
                <div className={selectionClassNames}>
                    <Link to="/answers-database" onClick={this.onBackClick}>
                        <FloatingActionButton className="answers-database__back-button" mini={true}>
                            <Forward style={{ transform: 'rotate(180deg)' }} />
                        </FloatingActionButton>
                    </Link>
                    <h2>{selection.title}</h2>
                    <div className="answers-database__selection-argument">
                        <h3>Argument</h3>
                        {selection.argument}
                    </div>
                    <div className="answers-database__selection-answer">
                        {selection.answer}
                    </div>
                </div>
                <div className={resultsClassNames}>
                    {
                        this.state.results.map(result => {
                            return (
                                <div key={result.title} className="answers-database__result">
                                    <Link to={result.url} onClick={partial(this.onSelect, result.url)}>
                                        <h2>{result.title}</h2>
                                    </Link>
                                    {this.renderResultTags(result.tags)}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="answers-database">
                {this.renderFindSection()}
                {this.renderContent()}
            </div>
        );
    }
}

const mapStateToProps = createSelector(
    state => state.app,
    app => ({ ...app })
);

const mapActionsToProps = {
    onSetApp: setApp,
    onSetSubApp: setSubApp
};

export default connect(mapStateToProps, mapActionsToProps)(AnswersDatabase);
