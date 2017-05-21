import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { delay, get, map, partial } from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

import { CONFESSIONS_CREEDS } from 'app/constants/global';
import { setApp } from 'app/actions/AppActions';
import AppHeader from 'app/components/AppHeader';
import ContentCard from 'app/components/ContentCard';
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
        this.setParentState = this.setParentState.bind(this);
    }

    componentWillMount() {
        if (typeof window !== 'undefined') {
            document.title = 'Confessions and Creeds: Tools to help you read and compare the historic confessions and creeds more effectively.';
            document.body.style.background = '#B2EBF2';

            const pathname = window.location.pathname;

            if (CONFESSIONS_CREEDS[pathname]) {
                this.setState({ selection: pathname });
                document.title = CONFESSIONS_CREEDS[pathname].title;
            }
        }
    }

    setParentState(object) {
        this.setState(object);
    }

    openUrl(event, key, value) {
        const { history } = this.props

        this.setState({
            showContent: false
        });

        history.push(value);

        if (typeof window !== 'undefined' && CONFESSIONS_CREEDS[value]) {
            document.title = CONFESSIONS_CREEDS[value].title;
        }

        delay(() => {
            this.setState({
                selection: value,
                showContent: true
            });
        }, 400);
    }

    renderDropdown() {
        const { selection } = this.state;

        return (
            <Paper className="header__dropdown-card" zDepth={5}>
                <DropDownMenu
                    className="header__dropdown"
                    value={selection}
                    onChange={this.openUrl}
                    style={{ width: 350 }}
                    autoWidth={false}
                >
                    <MenuItem value={null} primaryText="Select a confession or creed" disabled />
                    {
                        map(CONFESSIONS_CREEDS, (value, key) => {
                            return (
                                <MenuItem
                                    key={value.name}
                                    value={key}
                                    primaryText={value.name}
                                />
                            );
                        })
                    }
                </DropDownMenu>
            </Paper>
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

        const data = get(CONFESSIONS_CREEDS[selection], 'data', []);
        const name = get(CONFESSIONS_CREEDS[selection], 'title', 'Select a confession or creed above');

        return (
            <ConfessionsCreedsContentCard data={data} name={name} />
        );
    }

    render() {
        const { showHeader } = this.state;
        const { selection, showContent } = this.state;

        return (
            <div className="confessions-creeds">
                <AppHeader
                    setParentState={this.setParentState}
                    showHeader={showHeader}
                    title="Confessions/Creeds Explorer"
                    subtitle="Read and study historic confessions and creeds with easy display of Scripture references"
                >
                    {this.renderDropdown()}
                </AppHeader>
                <ContentCard setParentState={this.setParentState} showContent={showContent}>
                    {this.renderContent()}
                </ContentCard>
            </div>
        );
    }
}

export default withRouter(ConfessionsCreeds);
