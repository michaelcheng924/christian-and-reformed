import $ from 'jquery';
import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { delay, partial } from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import { LONDON_BAPTIST, LONDON_BAPTIST_NAME } from 'app/constants/london-baptist.js';
import { setApp } from 'app/actions/AppActions';
import ConfessionsCreedsContentCard from 'app/components/ConfessionsCreeds/content-card';

class ConfessionsCreeds extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selection: null,
            showContent: false,
            showHeader: true
        };

        this.openUrl = this.openUrl.bind(this);
    }

    componentWillMount() {
        if (typeof window !== 'undefined') {
            document.title = 'Confessions and Creeds';
            document.body.style.background = '#B2EBF2';

            const pathname = window.location.pathname;

            if (pathname === '/confessions-creeds/1689-london-baptist-confession') {
                this.setState({ selection: pathname });
            }
        }
    }

    componentDidMount() {
        delay(() => {
            this.setState({ showContent: true });
        }, 400);
    }

    openUrl(event, key, value) {
        const { history } = this.props

        this.setState({
            showContent: false,
            selection: value
        });

        history.push(value);

        delay(() => {
            this.setState({ showContent: true });
        }, 400);
    }

    renderHeader() {
        const { selection } = this.state;

        return (
            <CSSTransitionGroup
                transitionName="confessionsCreedsHeader"
                transitionAppear={true}
                transitionAppearTimeout={400}
                transitionEnter={false}
                transitionLeave={true}
                transitionLeaveTimeout={400}
            >
                {
                    this.state.showHeader
                        ? (
                            <div className="header">
                                <div>
                                    <div className="header-title">Confessions and Creeds</div>
                                    <div className="header-subtitle">Tools to help you read and compare the historic confessions and creeds more effectively.</div>
                                    <Card className="header__dropdown-card">
                                        <CardText className="header__dropdown-card-description">
                                            <DropDownMenu
                                                className="header__dropdown"
                                                value={selection}
                                                onChange={this.openUrl}
                                                style={{ width: 350 }}
                                                autoWidth={false}
                                            >
                                                <MenuItem value={null} primaryText="Select a confession or creed" disabled />
                                                <MenuItem value="/confessions-creeds/1689-london-baptist-confession" primaryText="1689 London Baptist Confession of Faith" />
                                                <MenuItem value="westminster" primaryText="Westminster Confession of Faith" />
                                            </DropDownMenu>
                                        </CardText>
                                    </Card>
                                </div>
                            </div>
                        )
                        : null
                }
            </CSSTransitionGroup>
        );
    }

    renderContent() {
        const { selection } = this.state;

        if (!this.state.selection) {
            return (
                <Card className="confessions-creeds__content-card">
                    <CardTitle
                        className="confessions-creeds__content-card-title"
                        title="Select a confession or creed above"
                    />
                    <CardText>
                        Confession or creed text will appear here.
                    </CardText>
                </Card>
            );
        }

        let data;
        let name;

        switch (selection) {
            case '/confessions-creeds/1689-london-baptist-confession':
                data = LONDON_BAPTIST;
                name = LONDON_BAPTIST_NAME;
                break;
            default:
                data = [];
                name = 'Select a confession or creed above';
                break;
        }

        return (
            <ConfessionsCreedsContentCard data={data} name={name} />
        );
    }

    render() {
        const { selection, showContent } = this.state;

        return (
            <div className="confessions-creeds">
                {this.renderHeader()}
                <div className="confessions-creeds__content">
                    <CSSTransitionGroup
                        transitionName="confessionsCreedsCard"
                        transitionEnter={true}
                        transitionEnterTimeout={400}
                        transitionLeave={true}
                        transitionLeaveTimeout={400}
                    >
                        {
                            showContent
                                ? (
                                    <div className="confessions-creeds__content-card-container">
                                        {this.renderContent()}
                                    </div>
                                )
                                : null
                        }
                    </CSSTransitionGroup>
                </div>
            </div>
        );
    }
}

export default withRouter(ConfessionsCreeds);
