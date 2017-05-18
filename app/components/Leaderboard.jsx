import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class OrderSalvationContentCard extends Component {
    getScore(score) {
        if (score.indexOf(':') !== -1) {
            const splitScore = score.split(':');
            return `${splitScore[0]} minutes ${splitScore[1]} seconds`;
        }

        return score;
    }

    render() {
        const { scores } = this.props;

        if (isEmpty(scores)) { return null; }

        return (
            <div className="leaderboard">
                <h2>Leaderboard</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Rank</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Score</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {
                            scores.map((item, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableRowColumn>{index + 1}</TableRowColumn>
                                        <TableRowColumn>{item.name}</TableRowColumn>
                                        <TableRowColumn>{this.getScore(item.score)}</TableRowColumn>
                                    </TableRow>
                                );
                            })
                        }
                    </TableBody>
                  </Table>
            </div>
        );
    }
}
