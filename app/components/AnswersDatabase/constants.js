import { keyBy } from 'lodash';

import abortion from 'app/components/AnswersDatabase/subjects/abortion';
import bibleExternal from 'app/components/AnswersDatabase/subjects/bibleExternal';
import bibleInternal from 'app/components/AnswersDatabase/subjects/bibleInternal';
import calvinism from 'app/components/AnswersDatabase/subjects/calvinism';
import complementarianism from 'app/components/AnswersDatabase/subjects/complementarianism';
import creation from 'app/components/AnswersDatabase/subjects/creation';
import islam from 'app/components/AnswersDatabase/subjects/islam';
import jesus from 'app/components/AnswersDatabase/subjects/jesus';
import miscellaneous from 'app/components/AnswersDatabase/subjects/miscellaneous';
import presuppositional from 'app/components/AnswersDatabase/subjects/presuppositional';
import science from 'app/components/AnswersDatabase/subjects/science';

const ANSWERS_DATABASE = []
.concat(abortion)
.concat(calvinism)
.concat(complementarianism)
.concat(creation)
.concat(bibleExternal)
.concat(bibleInternal)
.concat(islam)
.concat(jesus)
.concat(miscellaneous)
.concat(presuppositional)
.concat(science);

const ANSWERS_DATABASE_MAP = keyBy(ANSWERS_DATABASE, 'url');

export {
    ANSWERS_DATABASE,
    ANSWERS_DATABASE_MAP
};
