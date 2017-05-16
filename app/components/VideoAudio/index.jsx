import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { delay, partial } from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

import GOSPEL from 'app/constants/course-gospel';
import AppHeader from 'app/components/AppHeader';
import ContentCard from 'app/components/ContentCard';
import VideoAudioContentCard from 'app/components/VideoAudio/content-card';

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

            const pathname = window.location.pathname;

            if (pathname === '/video-audio/gospel') {
                this.setState({ selection: pathname });
                document.title = 'Video/Audio Mini-course: What is the Gospel?';
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
            <Paper className="header__dropdown-card" zDepth={5}>
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
            </Paper>
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
            case '/video-audio/gospel':
                data = GOSPEL;
                name = GOSPEL.name;
                break;
            default:
                data = [];
                name = 'Select a mini-course above';
                break;
        }

        return (
            <VideoAudioContentCard data={data} name={name} />
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
