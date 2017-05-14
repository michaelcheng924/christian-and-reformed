import React, { Component } from 'react';
import { withRouter } from 'react-router';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import css from 'classnames';
import { delay } from 'lodash';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import BOYS_GIRLS from 'app/constants/catechism-boys-girls';
import WESTMINSTER_SHORTER from 'app/constants/catechism-westminster-shorter';
import AppHeader from 'app/components/AppHeader';
import ContentCard from 'app/components/ContentCard';
import CatechismTrainingContentCard from 'app/components/CatechismTraining/content-card';

class CatechismTraining extends Component {
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
            document.title = 'Catechism Training: Tools to Help You and Your Family Learn the Catechism Faster';
            document.body.style.background = '#F3E5F5';

            const pathname = window.location.pathname;

            if (pathname === '/catechism-training/catechism-boys-girls') {
                this.setState({ selection: pathname });
                document.title = 'Catechism for Boys and Girls Training';
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

        if (typeof window !== 'undefined' && value === '/catechism-training/catechism-boys-girls') {
            document.title = 'Catechism for Boys and Girls Training';
        }

        delay(() => {
            this.setState({
                questionNumber: 1,
                selection: value,
                showContent: true
            });
        }, 400);
    }

    renderDropdown() {
        const { selection } = this.state;

        return (
            <Card className="header__dropdown-card">
                <CardText className="header__dropdown-card-description">
                    <DropDownMenu
                        className="header__dropdown"
                        value={selection}
                        onChange={this.openUrl}
                        style={{ width: 350 }}
                        autoWidth={false}
                    >
                        <MenuItem value={null} primaryText="Select a catechism" disabled />
                        <MenuItem value="/catechism-training/catechism-boys-girls" primaryText="Catechism for Boys and Girls" />
                        <MenuItem value="/catechism-training/westminster-shorter" primaryText="Westminster Shorter Catechism" />
                    </DropDownMenu>
                </CardText>
            </Card>
        );
    }

    renderContent() {
        const { selection } = this.state;

        if (!selection) {
            return (
                <Card className="catechism-training__content-card">
                    <CardTitle
                        className="catechism-training__content-card-title"
                        title="Select a catechism above"
                    />
                    <CardText>
                        Catechism questions will appear here.
                    </CardText>
                </Card>
            );
        }

        let data;
        let name;

        switch (selection) {
            case '/catechism-training/catechism-boys-girls':
                data = BOYS_GIRLS;
                name = 'Catechism for Boys and Girls';
                break;
            case '/catechism-training/westminster-shorter':
                data = WESTMINSTER_SHORTER;
                name = 'Westminster Shorter Catechism';
                break;
            default:
                data = [];
                name = 'Select a catechism above'
        }

        return (
            <CatechismTrainingContentCard data={data} name={name} />
        );
    }

    render() {
        const { setOpacity, showContent, showHeader } = this.state;

        const classnames = css('catechism-training__content-card-container', {
            'catechism-training__content-card-container--opacity': setOpacity
        });

        return (
            <div className="catechism-training">
                <AppHeader
                    setParentState={this.setParentState}
                    showHeader={showHeader}
                    title="Catechism Training"
                    subtitle="An app to help you and your children learn the catechism faster."
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

// <div className="catechism-training__content">
//                     <CSSTransitionGroup
//                         transitionName="catechismCard"
//                         transitionEnter={true}
//                         transitionEnterTimeout={400}
//                         transitionLeave={true}
//                         transitionLeaveTimeout={400}
//                     >
//                         {
//                             showContent
//                                 ? (
//                                     <div className={classnames}>
//                                         {this.renderContent()}
//                                     </div>
//                                 )
//                                 : null
//                         }
//                     </CSSTransitionGroup>
//                 </div>

export default withRouter(CatechismTraining);
