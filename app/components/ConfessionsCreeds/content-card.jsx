import $ from 'jquery';
import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { delay, find, partial, remove } from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ClearIcon from 'material-ui-icons/Clear';

export default class ConfessionsCreedsContentCard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selection: 1,
            scriptures: {}
        };

        this.removeScripture = this.removeScripture.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.showScripture = this.showScripture.bind(this);
    }

    onSelect(event, key, value) {
        this.setState({ selection: value });
    }

    showScripture(index, scripture, superscript) {
        const scriptures = this.state.scriptures;

        if (!scriptures[index]) {
            scriptures[index] = [];
        }

        $.ajax({
            context: this,
            method: 'POST',
            contentType: 'application/json',
            url: '/api/global/getscripture',
            data: JSON.stringify({ scripture }),
            success(response) {
                scriptures[index].unshift({
                    scripture,
                    superscript,
                    text: response.body
                });

                this.setState({ scriptures });
            }
        });
    }

    removeScripture(index, scripture) {
        const { scriptures } = this.state;

        const foundScripture = find(scriptures[index], item => item.scripture === scripture);

        foundScripture.remove = true;

        this.setState({ scriptures });

        delay(() => {
            remove(scriptures[index], item => item.scripture === scripture);
        }, 400);
    }

    renderChapter() {
        const { scriptures, selection } = this.state;
        const { data } = this.props;

        return (
            <div className="confessions-creeds__content-card-chapter">
                <div className="confessions-creeds__content-card-section">
                    <strong><em>Click superscripts to view Scriptures in a popover without leaving the page.</em></strong>
                </div>

                {
                    data[selection - 1].content.map((paragraph, index) => {
                        return (
                            <div key={index} className="confessions-creeds__content-card-section">
                                <div><em><u>Paragraph {index + 1}</u></em></div>
                                {
                                    paragraph.map(section => {
                                        return (
                                            <span key={section.superscript}>{section.text}<sup className="confessions-creeds__superscript" onClick={partial(this.showScripture, index, section.scriptures, section.superscript)}>{`${section.superscript} `}</sup></span>
                                        );
                                    })
                                }
                                {
                                    scriptures[index] && scriptures[index].map((scripture, scriptureTextIndex) => {
                                        return (
                                            <CSSTransitionGroup
                                                key={scripture.scripture}
                                                transitionName="confessionsCreedsScripture"
                                                transitionAppear={true}
                                                transitionAppearTimeout={400}
                                                transitionEnter={true}
                                                transitionEnterTimeout={400}
                                                transitionLeave={true}
                                                transitionLeaveTimeout={400}
                                            >
                                                {
                                                    scripture.remove
                                                        ? null
                                                        : (
                                                            <Card className="scripture-card">
                                                                <CardTitle
                                                                    className="scripture-card__title"
                                                                    title={`${scripture.superscript}) ${scripture.scripture}`}
                                                                />
                                                                <CardText className="scripture-card__text">
                                                                    <div dangerouslySetInnerHTML={{__html: scripture.text}} />
                                                                    <ClearIcon onClick={partial(this.removeScripture, index, scripture.scripture)} />
                                                                </CardText>
                                                            </Card>
                                                        )
                                                }
                                            </CSSTransitionGroup>
                                        );
                                    })
                                }
                            </div>
                        );
                        // return (
                        //     <div key={index} className="confessions-creeds__content-card-section">
                        //         <div><strong><u>{index + 1}</u></strong></div>
                        //         <div>{item.text}</div>
                        //         <div className="confessions-creeds__content-card-scriptures">
                        //             {
                        //                 item.scriptures.map((scripture, scriptureIndex) => {
                        //                     const comma = scriptureIndex === item.scriptures.length - 1 ? null : ', ';

                        //                     return (
                        //                         <span key={scriptureIndex} className="confessions-creeds__content-card-scripture" onClick={partial(this.showScripture, index, scripture)}>{scripture}{comma}</span>
                        //                     );
                        //                 })
                        //             }
                        //             {
                        //                 scriptures[index] && scriptures[index].map((scripture, scriptureTextIndex) => {
                        //                     return (
                        //                         <CSSTransitionGroup
                        //                             key={scripture.scripture}
                        //                             transitionName="confessionsCreedsScripture"
                        //                             transitionAppear={true}
                        //                             transitionAppearTimeout={400}
                        //                             transitionEnter={true}
                        //                             transitionEnterTimeout={400}
                        //                             transitionLeave={true}
                        //                             transitionLeaveTimeout={400}
                        //                         >
                        //                             {
                        //                                 scripture.remove
                        //                                     ? null
                        //                                     : (
                        //                                         <Card className="scripture-card">
                        //                                             <CardTitle
                        //                                                 className="scripture-card__title"
                        //                                                 title={scripture.scripture}
                        //                                             />
                        //                                             <CardText className="scripture-card__text">
                        //                                                 <div dangerouslySetInnerHTML={{__html: scripture.text}} />
                        //                                                 <ClearIcon onClick={partial(this.removeScripture, index, scripture.scripture)} />
                        //                                             </CardText>
                        //                                         </Card>
                        //                                     )
                        //                             }
                        //                         </CSSTransitionGroup>
                        //                     );
                        //                 })
                        //             }
                        //         </div>
                        //     </div>
                        // );
                    })
                }
            </div>
        );
    }

    render() {
        const { selection } = this.state;
        const { data, name } = this.props;

        return (
            <Card className="confessions-creeds__content-card">
                <CardTitle
                    className="confessions-creeds__content-card-title"
                    title={name}
                />
                <CardText>
                    <div className="confessions-creeds__content-card-dropdown-label"> Select a chapter from the dropdown below:</div>
                    <DropDownMenu
                        className="confessions-creeds__content-card-dropdown"
                        value={selection}
                        maxHeight={400}
                        onChange={this.onSelect}
                        style={{ width: '100%' }}
                        autoWidth={false}
                    >
                        {
                            data.map((item, index) => {
                                return (
                                    <MenuItem key={index} value={index + 1} primaryText={`Chapter ${item.chapter}:  ${item.title}`} />
                                );
                            })
                        }
                    </DropDownMenu>
                    {this.renderChapter()}
                </CardText>
            </Card>
        );
    }
}
