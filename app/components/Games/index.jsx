import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { delay, partial } from 'lodash';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import GAMES from 'app/constants/games';
import BOYS_GIRLS from 'app/constants/catechism-boys-girls';
import WESTMINSTER_SHORTER from 'app/constants/catechism-westminster-shorter';
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
            document.title = 'Christian and Reformed - Games: Learning the Bible is fun';
            document.body.style.background = '#FFF3E0';

            const pathname = window.location.pathname;

            if (GAMES[pathname]) {
                this.setState({ selection: pathname });
                document.title = GAMES[pathname];
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

        if (typeof window !== 'undefined' && GAMES[value]) {
            document.title = GAMES[value];
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
                    <MenuItem value="/games/bible-books-order" primaryText="Bible Books Order Challenge" />
                    <MenuItem value="/games/catechism-boys-girls" primaryText="Catechism for Boys and Girls Training" />
                    <MenuItem value="/games/catechism-westminster-shorter" primaryText="Westminster Shorter Catechism Training" />
                    <MenuItem value="/games/order-salvation" primaryText="Order the Order of Salvation" />
                </DropDownMenu>
            </Paper>
        );
    }

    renderContent() {
        const { selection } = this.state;

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

        switch (selection) {
            case '/games/bible-books-order':
                Component = <BibleOrder />;
                break;
            case '/games/catechism-boys-girls':
                Component = <CatechismTrainingContentCard data={BOYS_GIRLS.data} name={BOYS_GIRLS.name} />
                break;
            case '/games/catechism-westminster-shorter':
                Component = <CatechismTrainingContentCard data={WESTMINSTER_SHORTER.data} name={WESTMINSTER_SHORTER.name} />
                break;
            case '/games/order-salvation':
                Component = <OrderSalvation />;
                break;
            default:
                Component = null;
                break;
        }

        return Component;
    }

    render() {
        const { showContent, showHeader } = this.state;

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
                <ContentCard setParentState={this.setParentState} showContent={showContent}>
                    {this.renderContent()}
                </ContentCard>
            </div>
        );
    }
}

export default withRouter(Games);
