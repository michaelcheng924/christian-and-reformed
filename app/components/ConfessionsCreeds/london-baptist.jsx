import $ from 'jquery';
import React, { Component } from 'react';
import css from 'classnames';
import { map, partial } from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import CloseIcon from 'material-ui-icons/Close';

import LONDON_BAPTIST from 'app/constants/london-baptist.js';

export default class LondonBaptistConfession extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chapter: 1,
            scriptureTexts: {}
        };

        this.getScripture = this.getScripture.bind(this);
        this.removeScripture = this.removeScripture.bind(this);
        this.setChapter = this.setChapter.bind(this);
    }

    componentWillMount() {
        if (typeof window !== 'undefined') {
            document.title = '1689 London Baptist Confession of Faith';
            document.body.style.background = '#B3E5FC';
        }
    }

    setChapter(chapter) {
        this.setState({ chapter, scriptureTexts: {} });
    }

    getScripture(scripture, index) {
        const formattedScripture = scripture.replace(' ', '+');

        $.ajax({
            context: this,
            method: 'POST',
            url: '/api/global',
            contentType: 'application/json',
            data: JSON.stringify({ scripture: formattedScripture }),
            success(response) {
                if (!this.state.scriptureTexts[index]) {
                    this.state.scriptureTexts[index] = {};
                }
                
                this.state.scriptureTexts[index][scripture] = response.body;

                this.setState({ scriptureTexts: this.state.scriptureTexts });
            }
        });
    }

    removeScripture(scripture, index) {
        delete this.state.scriptureTexts[index][scripture];

        this.setState({ scriptureTexts: this.state.scriptureTexts });
    }

    renderChapterSelect(data) {

        return (
            <div className="confessions-creeds__chapter-select">
                <div className="confessions-creeds__chapter-select-chapters">
                    {
                        LONDON_BAPTIST.map((chapter, index) => {
                            const divider = index === LONDON_BAPTIST.length - 1 ? null : <span className="confessions-creeds__chapter-select-divider">&#9679;</span>;

                            const classNames = css('confessions-creeds__chapter-select-chapter', {
                                'confessions-creeds__chapter-select-chapter--active': this.state.chapter === chapter.chapter
                            });

                            return (
                                <span key={chapter.chapter} className={classNames} onClick={partial(this.setChapter, chapter.chapter)}>{chapter.chapter} - {chapter.title} {divider}</span>
                            );
                        })
                    }
                </div>
                <h3>Chapter {data.chapter} - {data.title}</h3>
            </div>
        );
    }

    renderCards(data) {
        return data.content.map((section, index) => {
            return (
                <Card key={index} className="confessions-creeds__card">
                    <CardTitle className="confessions-creeds__card-title" title={index + 1} />
                    <CardText className="confessions-creeds__card-description">
                        {section.text}
                        <div className="confessions-creeds__scriptures">
                            ({
                                section.scriptures.map((scripture, scriptureIndex) => {
                                    const comma = scriptureIndex === section.scriptures.length - 1 ? null : ', ';

                                    return (
                                        <span key={scriptureIndex} className="confessions-creeds__scripture-reference" onClick={partial(this.getScripture, scripture, index)}>
                                            {scripture}{comma}
                                        </span>
                                    );
                                })
                            })
                            <div className="confessions-creeds__scripture-texts">
                                <div><strong>Clicking on Scriptures will display them below:</strong></div>
                                {
                                    this.state.scriptureTexts[index] && map(this.state.scriptureTexts[index], (scripture, reference) => {
                                        return (
                                            <div key={reference} className="confessions-creeds__scripture-text">
                                                <div dangerouslySetInnerHTML={{ __html: scripture }} />
                                                <CloseIcon onClick={partial(this.removeScripture, reference, index)} />
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </CardText>
                </Card>
            );
        })
    }

    render() {
        const data = LONDON_BAPTIST[this.state.chapter - 1];

        return (
            <div className="confessions-creeds__content">
                <h2>1689 London Baptist Confession of Faith</h2>
                {this.renderChapterSelect(data)}
                <div className="confessions-creeds__cards">
                    {this.renderCards(data)}
                </div>
            </div>
        );
    }
}
