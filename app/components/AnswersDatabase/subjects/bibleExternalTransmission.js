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
    updated: '8/8/2017',
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
            <p>The New Testament and Old Testament that we have today can be trusted to be essentially the same as the original texts. Compared to any other ancient text, there are far more biblical manuscripts far closer to the date of the originals.</p>

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

            <h4>New Testament Accuracy</h4>

            <p>It is clear that we have an enormous number of New Testament manuscripts, many of which have dates that are very close to the originals. But, how accurate are they? Are there significant differences between them that would bring into question the reliability of the New Testament? The answer is that there are an insignificant number of differences between the New Testament manuscripts we possess. Here is what Norman Geisler says on the subject:</p>

            <blockquote>First, NT textual authorities Westcott and Hort estimated that only about one-sixtieth rise above “trivialities” and can be called “substantial variations.” In short, the NT is 98.33 percent pure. Second, Greek expert Ezra Abbott said about 19/20 (95 percent) of the readings are “various” rather than “rival” readings, and about 19/20 (95 percent) of the rest make no appreciable difference in the sense of the passage. Thus the text is 99.75 percent accurate. Third, noted NT Greek scholar A. T. Robertson said the real concern is with about a “thousandth part of the entire text.” So, the reconstructed text of the New Testament is 99.9% free from real concern.</blockquote>

            <p>Most of the differences between manuscripts are trivial and make no real impact upon the meaning of the text. Only about .1% of the differences are of any real concern, and reasonable solutions have been proposed for all of these differences. Thus, there is no reason to doubt the accuracy/reliability of the New Testament that we have today in terms of how similar it is to the original.</p>

            <h4>Old Testament Accuracy - The Dead Sea Scrolls</h4>

            <p>What about the accuracy of the Old Testament manuscripts that have been discovered? Again, there is tremendous reason to trust in the accuracy/reliability of the Old Testament we possess today.</p>

            <img src="/dead-sea-scrolls.png" style={{ float: 'right' }} />

            <p>The Dead Sea Scrolls, considered one of the greatest archaeological finds of the 20th century, were written between 150 B.C. and 70 A.D. Previously, the earliest Old Testament manuscript discovered was written A.D. 980. Over 95% of the text of the Dead Sea Scrolls text is word-for-word identical with what had been determined to be the Old Testament before the discovery of the Dead Sea Scrolls, and like with the differences in New Testament manuscripts, most of the differences in the Old Testament manuscripts are insignificant, and the rest have reasonable explanations.</p>

            <p>The fact that the Old Testament has been so reliably copied over the course of a thousand years demonstrates that just like with the New Testament, we can have tremendous confidence in the accuracy/reliability of the Old Testament we have today.</p>
        </div>
    )
};

export default bibleExternalTransmission;
