import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { delay, partial } from 'lodash';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import { GAMES, ROUTES } from 'app/constants/routes';
import BOYS_GIRLS from 'app/constants/catechism-boys-girls';
import WESTMINSTER_SHORTER from 'app/constants/catechism-westminster-shorter';
import { addScore } from 'app/api/users';
import AppHeader from 'app/components/AppHeader';
import ContentCard from 'app/components/ContentCard';
import BibleOrder from 'app/components/Games/bible-order';
import CatechismTrainingContentCard from 'app/components/CatechismTraining/content-card';
import OrderSalvation from 'app/components/Games/order-salvation';

class Games extends Component {
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
            showContent: false,
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
                    <MenuItem value={null} primaryText="Select a game" disabled />
                    {
                        GAMES.map(item => {
                            return <MenuItem key={item.name} value={item.url} primaryText={item.name} />;
                        })
                    }
                </DropDownMenu>
            </Paper>
        );
    }

    renderContent() {
        const { selection } = this.state;
        const { appData, onAddScore } = this.props;

        if (!selection) {
            return (
                <Card className="games__content-card">
                    <CardTitle
                        className="games__content-card-title"
                        title="Select a game above"
                    />
                    <CardText>
                        Game content will appear here.
                    </CardText>
                </Card>
            );
        }

        let Component;

        const props = {
            appData,
            selection
        };

        switch (selection) {
            case '/games/bible-books-order':
                Component = <BibleOrder {...props} />;
                break;
            case '/games/catechism-boys-girls':
                Component = <CatechismTrainingContentCard {...props} data={BOYS_GIRLS.data} name={BOYS_GIRLS.name} />
                break;
            case '/games/catechism-westminster-shorter':
                Component = <CatechismTrainingContentCard {...props} data={WESTMINSTER_SHORTER.data} name={WESTMINSTER_SHORTER.name} />
                break;
            case '/games/order-salvation':
                Component = <OrderSalvation {...props} />;
                break;
            default:
                Component = null;
                break;
        }

        return Component;
    }

    render() {
        const { selection, showContent, showHeader } = this.state;

        return (
            <div className="games">
                <AppHeader
                    setParentState={this.setParentState}
                    showHeader={showHeader}
                    title="Games"
                    subtitle="Learning the Bible is fun"
                >
                    {this.renderDropdown()}
                </AppHeader>
                <ContentCard selection={selection} setParentState={this.setParentState} showContent={showContent}>
                    {this.renderContent()}
                </ContentCard>
            </div>
        );
    }
}

const mapStateToProps = createSelector(
    state => state.app,
    app => ({ ...app })
);

export default connect(mapStateToProps, null)(withRouter(Games));
