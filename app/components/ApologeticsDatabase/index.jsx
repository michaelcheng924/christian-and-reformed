import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { find, partial, some } from 'lodash';
import css from 'classnames';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

import { setSubApp } from 'app/actions/AppActions';
import { APOLOGETICS_DATABASE, APOLOGETICS_DATABASE_MAP } from 'app/components/ApologeticsDatabase/constants';

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

class ApologeticsDatabase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: APOLOGETICS_DATABASE,
            filterChanged: false,
            search: ''
        };

        this.onFilter = this.onFilter.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.setSearch = this.setSearch.bind(this);
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            const pathname = window.location.pathname;

            if (APOLOGETICS_DATABASE_MAP[pathname]) {
                this.props.onSetSubApp(pathname);

                document.title = APOLOGETICS_DATABASE_MAP[pathname].title;
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { filterChanged, search } = this.state;

        if (filterChanged !== prevState.filterChanged || search !== prevState.search) {
            if (!search && !this.hasFilter()) {
                this.setState({ results: APOLOGETICS_DATABASE });
            } else {
                this.setState({
                    results: APOLOGETICS_DATABASE.filter(result => {
                        const containsSearch = search ? result.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 : true;

                        return this.hasFilter() ? containsSearch && this.shouldShowTags(result) : containsSearch;
                    })
                });
            }
        }
    }

    onSelect(url) {
        if (typeof window !== 'undefined') {
            if (APOLOGETICS_DATABASE_MAP[url]) {
                this.props.onSetSubApp(url);

                document.title = APOLOGETICS_DATABASE_MAP[url].title;
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
        if (this.props.subApp) { return null; }

        return (
            <div className="apologetics-database__find-section">
                <h3>Search and Filter Database</h3>
                <TextField
                    className="apologetics-database__search-input"
                    hintText="Search"
                    hintStyle={{ color: '#EF6C00', fontWeight: 300 }}
                    onChange={this.setSearch}
                    style={{ fontWeight: 300 }}
                    underlineFocusStyle={{ borderColor: '#E65100' }}
                    underlineStyle={{ borderColor: '#EF6C00' }}
                />
                <h4 className="apologetics-database__filters-header">Filters:</h4>
                <div className="apologetics-database__filters">
                    {
                        TAGS.map(tag => {
                            const classNames = css(`apologetics-database__result-tag apologetics-database__result-tag--${tag.code}`, {
                                'apologetics-database__result-tag--active': this.state[tag.code]
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
                <div className="apologetics-database__results-count"><strong>{this.state.results.length}</strong> {this.state.results.length === 1 ? 'result' : 'results'}</div>
            </div>
        );
    }

    renderResultTags(tags) {
        return (
            <div className="apologetics-database__result-tags">
                {
                    tags.map(tag => {
                        return (
                            <div key={tag} className={`apologetics-database__result-tag apologetics-database__result-tag--active apologetics-database__result-tag--${tag}`}>
                                {find(TAGS, globalTag => globalTag.code === tag).name}
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    renderResults() {
        if (this.props.subApp) { return null; }

        return (
            <div className="apologetics-database__results">
                {
                    this.state.results.map(result => {
                        return (
                            <div key={result.title} className="apologetics-database__result">
                                <Link to={result.url} onClick={partial(this.onSelect, result.url)}>
                                    <h2>{result.title}</h2>
                                </Link>
                                {this.renderResultTags(result.tags)}
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    renderSelection() {
        if (!this.props.subApp) { return null; }

        return (
            <div>BLAH</div>
        );
    }

    render() {
        return (
            <div className="apologetics-database">
                {this.renderFindSection()}
                {this.renderResults()}
                {this.renderSelection()}
            </div>
        );
    }
}

const mapStateToProps = createSelector(
    state => state.app,
    app => ({ ...app })
);

const mapActionsToProps = {
    onSetSubApp: setSubApp
};

export default connect(mapStateToProps, mapActionsToProps)(ApologeticsDatabase);
