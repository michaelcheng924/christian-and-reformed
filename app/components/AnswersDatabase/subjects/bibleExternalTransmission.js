import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const bibleExternalTransmission = {
    added: '8/1/2017',
    updated: '',
    title: 'Has the Bible been reliably copied/transmitted throughout history?',
    tags: ['bible-external'],
    url: '/answers-database/has-the-bible-been-reliably-transmitted-throughout-history',
    argument: <p>The original Bible manuscripts have been changed/corrupted throughout history, so the Bible we have today is unreliable and cannot be trusted.</p>,
    answer: (
        <div>
            <h3>Quick answer</h3>
            <p>Enormous numbers of biblical manuscripts have been discovered, many of which date extremely close to the original writings, and these manuscripts have an insignificant amount of difference between them (most of which are minor copy errors that do not affect the meaning at all).</p>

            <h3>Detailed answer</h3>
            <h4>New Testament and Old Testament compared with other ancient texts</h4>
            <p>The New Testament and Old Testament that we have today can be trusted to be essentially the same as the original texts. Compared to any other ancient text, there are far more biblical manuscripts far closer to the date of the originals. Furthermore, these manuscripts are about 99.5% identical, most of the differences can be explained very reasonably, and none of the differences affects any significant Christian doctrine.</p>

            <div className="answers-database__transmission-table">
                <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHeaderColumn>Author</TableHeaderColumn>
                        <TableHeaderColumn>Book</TableHeaderColumn>
                        <TableHeaderColumn>Date written</TableHeaderColumn>
                        <TableHeaderColumn>Earliest copies</TableHeaderColumn>
                        <TableHeaderColumn>Time gap</TableHeaderColumn>
                        <TableHeaderColumn># of copies</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                      <TableRow className="answers-database__new-testament-table">
                        <TableRowColumn></TableRowColumn>
                        <TableRowColumn>New Testament</TableRowColumn>
                        <TableRowColumn>A.D. 50 &ndash; 100</TableRowColumn>
                        <TableRowColumn>
                            ~A.D. 114 (fragment)<br />
                            ~A.D. 200 (books)<br />
                            ~A.D. 250 (most NT)<br />
                            ~A.D. 325 (entire NT)
                        </TableRowColumn>
                        <TableRowColumn>
                            50 years<br />
                            100 years<br />
                            150 years<br />
                            225 years
                        </TableRowColumn>
                        <TableRowColumn>
                            5,366 Grk<br />
                            25k total
                        </TableRowColumn>
                      </TableRow>
                      <TableRow className="answers-database__new-testament-table">
                        <TableRowColumn></TableRowColumn>
                        <TableRowColumn>Old Testament</TableRowColumn>
                        <TableRowColumn>1445 &ndash; 400 B.C.</TableRowColumn>
                        <TableRowColumn>250 B.C.</TableRowColumn>
                        <TableRowColumn>150 years</TableRowColumn>
                        <TableRowColumn>> 10,000</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Homer</TableRowColumn>
                        <TableRowColumn>Iliad</TableRowColumn>
                        <TableRowColumn>800 B.C.</TableRowColumn>
                        <TableRowColumn>~400 B.C.</TableRowColumn>
                        <TableRowColumn>~400 years</TableRowColumn>
                        <TableRowColumn>643</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Demosthenes</TableRowColumn>
                        <TableRowColumn></TableRowColumn>
                        <TableRowColumn>300 B.C.</TableRowColumn>
                        <TableRowColumn>~A.D. 1100</TableRowColumn>
                        <TableRowColumn>~1,400 years</TableRowColumn>
                        <TableRowColumn>200</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Tacitus</TableRowColumn>
                        <TableRowColumn>Annals</TableRowColumn>
                        <TableRowColumn>A.D. 100</TableRowColumn>
                        <TableRowColumn>~A.D. 1100</TableRowColumn>
                        <TableRowColumn>~1,000 years</TableRowColumn>
                        <TableRowColumn>20</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Livy</TableRowColumn>
                        <TableRowColumn>History of Rome</TableRowColumn>
                        <TableRowColumn>59 B.C. &ndash; A.D. 17</TableRowColumn>
                        <TableRowColumn>
                            4th century (partial)<br />
                            mostly 10th century
                        </TableRowColumn>
                        <TableRowColumn>
                            ~400 years<br />
                            ~1,000 years
                        </TableRowColumn>
                        <TableRowColumn>20</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Caesar</TableRowColumn>
                        <TableRowColumn>Gallic Wars</TableRowColumn>
                        <TableRowColumn>100 &ndash; 44 B.C.</TableRowColumn>
                        <TableRowColumn>~A.D. 900</TableRowColumn>
                        <TableRowColumn>~1,000 years</TableRowColumn>
                        <TableRowColumn>10</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Herodotus</TableRowColumn>
                        <TableRowColumn>History</TableRowColumn>
                        <TableRowColumn>480 &ndash; 425 B.C.</TableRowColumn>
                        <TableRowColumn>~A.D. 900</TableRowColumn>
                        <TableRowColumn>~1,350 years</TableRowColumn>
                        <TableRowColumn>8</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Thucydides</TableRowColumn>
                        <TableRowColumn>History</TableRowColumn>
                        <TableRowColumn>460 &ndash; 400 B.C.</TableRowColumn>
                        <TableRowColumn>~A.D. 900</TableRowColumn>
                        <TableRowColumn>~1,300 years</TableRowColumn>
                        <TableRowColumn>8</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Pliny Secundus</TableRowColumn>
                        <TableRowColumn>Natural History</TableRowColumn>
                        <TableRowColumn>A.D. 61 &ndash; 113</TableRowColumn>
                        <TableRowColumn>~A.D. 850</TableRowColumn>
                        <TableRowColumn>~750 years</TableRowColumn>
                        <TableRowColumn>7</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Plato</TableRowColumn>
                        <TableRowColumn></TableRowColumn>
                        <TableRowColumn>400 B.C.</TableRowColumn>
                        <TableRowColumn>~A.D. 900</TableRowColumn>
                        <TableRowColumn>~1,300 years</TableRowColumn>
                        <TableRowColumn>7</TableRowColumn>
                      </TableRow>
                    </TableBody>
                  </Table>
            </div>
        </div>
    )
};

export default bibleExternalTransmission;
