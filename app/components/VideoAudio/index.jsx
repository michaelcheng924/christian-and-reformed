import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { delay, partial } from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import AppHeader from 'app/components/AppHeader';
import ContentCard from 'app/components/ContentCard';

class VideoAudo extends Component {
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
            document.title = 'Video/Audio Mini-courses: Video/audio on a variety of topics, with questions to test your understanding';
            document.body.style.background = '#FFCDD2';
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

        if (typeof window !== 'undefined' && value === '/confessions-creeds/1689-london-baptist-confession') {
            document.title = '1689 London Baptist Confession';
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
            <Card className="header__dropdown-card">
                <CardText className="header__dropdown-card-description">
                    <DropDownMenu
                        className="header__dropdown"
                        value={selection}
                        onChange={this.openUrl}
                        style={{ width: 350 }}
                        autoWidth={false}
                    >
                        <MenuItem value={null} primaryText="Select a mini-course" disabled />
                        <MenuItem value="/video-audio/gospel" primaryText="What is the Gospel?" />
                    </DropDownMenu>
                </CardText>
            </Card>
        );
    }

    renderContent() {
        const { selection } = this.state;

        if (!this.state.selection) {
            return (
                <Card className="video-audio__content-card">
                    <CardTitle
                        className="video-audio__content-card-title"
                        title="Select a mini-course above"
                    />
                    <CardText>
                        Mini-course content will appear here.
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
        const { showContent, showHeader } = this.state;

        return (
            <div className="video-audio">
                <AppHeader
                    setParentState={this.setParentState}
                    showHeader={showHeader}
                    title="Video/Audio Mini-courses"
                    subtitle="Video/audio on a variety of topics, with questions to test your understanding"
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

export default withRouter(VideoAudo);
