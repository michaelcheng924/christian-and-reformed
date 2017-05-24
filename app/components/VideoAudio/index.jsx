import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { delay, partial } from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

import { COURSES, ROUTES } from 'app/constants/routes';
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
                    <MenuItem value={null} primaryText="Select a mini-course" disabled />
                    {
                        COURSES.map(item => {
                            return (
                                <MenuItem key={item.name} value={item.url} primaryText={item.name} />
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

        let data = {};
        let name = 'Select a mini-course above';

        if (ROUTES[selection]) {
            data = ROUTES[selection].data;
            name = ROUTES[selection].name;
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
