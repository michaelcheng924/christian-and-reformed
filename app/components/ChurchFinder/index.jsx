import React, { Component } from 'react';
import css from 'classnames';
import Checkbox from 'material-ui/Checkbox';
import KeyboardArrowLeftIcon from 'material-ui-icons/KeyboardArrowLeft';

import ChurchDirectoryMap from 'app/components/ChurchFinder/map';
import ChurchDirectoryList from 'app/components/ChurchFinder/list';

export default class ChurchFinder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listView: false,
            showFilters: true
        };

        this.onListView = this.onListView.bind(this);
        this.toggleFilters = this.toggleFilters.bind(this);
    }

    toggleFilters() {
        this.setState({ showFilters: !this.state.showFilters });
    }

    onListView() {
        this.setState({ listView: !this.state.listView });
    }

    renderFilters() {
        const { showFilters } = this.state;

        const classNames = css('church-directory__filters', {
            'church-directory__filters--hide': !showFilters
        });

        return (
            <div className={classNames}>
                <div className="church-directory__filters-title" onClick={this.toggleFilters}>
                    <strong>Legend/Filters</strong>
                    <KeyboardArrowLeftIcon />
                </div>
                {
                    showFilters
                        ? (
                            <div>
                                <div className="church-directory__legend">
                                    <strong>Baptist:</strong>
                                    <div className="church-directory__legend-option">
                                        <img src="/marker-baptist-generic.png" />
                                        <span>Reformed theology</span>
                                    </div>
                                    <div className="church-directory__legend-option">
                                        <img src="/marker-baptist.png" />
                                        <span>+ Confessional</span>
                                    </div>
                                    <div className="church-directory__legend-option">
                                        <img src="/marker-baptist-fi.png" />
                                        <span>+ Family-integrated</span>
                                    </div>
                                </div>
                                {/*<Checkbox
                                    label="Confessional only"
                                    onCheck={this.onShowAnswer}
                                />
                                <Checkbox
                                    label="Family-integrated only"
                                    onCheck={this.onShowAnswer}
                                />*/}
                                <Checkbox
                                    label="List view"
                                    onCheck={this.onListView}
                                />
                            </div>
                        )
                        : null
                }
            </div>
        );
    }
    
    render() {
        const classNames = css('church-directory', {
            'church-directory--list': this.state.listView
        });

        return (
            <div className={classNames}>
                {
                    this.state.listView
                        ? <ChurchDirectoryList />
                        : <ChurchDirectoryMap />
                }
                {this.renderFilters()}
            </div>
        );
    }
}
