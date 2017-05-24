import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { delay, get, partial } from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

import { CONFESSIONS_CREEDS, ROUTES } from 'app/constants/routes';
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
            const pathname = window.location.pathname;

            if (ROUTES[pathname] && ROUTES[pathname].name) {
                this.setState({ selection: pathname });
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

        if (typeof window !== 'undefined' && ROUTES[value]) {
            document.title = ROUTES[value].windowTitle;
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
                        CONFESSIONS_CREEDS.map(item => {
                            return (
                                <MenuItem
                                    key={item.name}
                                    value={item.url}
                                    primaryText={item.name}
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

        const data = get(ROUTES[selection], 'data', []);
        const name = get(ROUTES[selection], 'title', 'Select a confession or creed above');

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
