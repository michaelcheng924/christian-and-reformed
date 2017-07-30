import { keyBy } from 'lodash';

import abortionRapeIncestLifeOfMother from 'app/components/AnswersDatabase/subjects/abortionRapeIncestLifeOfMother';

import bibleExternalTransmission from 'app/components/AnswersDatabase/subjects/bibleExternalTransmission';

import bibleInternalSlavery from 'app/components/AnswersDatabase/subjects/bibleInternalSlavery';

const ANSWERS_DATABASE = [
    abortionRapeIncestLifeOfMother,
    bibleInternalSlavery,
    bibleExternalTransmission,
];

const ANSWERS_DATABASE_MAP = keyBy(ANSWERS_DATABASE, 'url');

export {
    ANSWERS_DATABASE,
    ANSWERS_DATABASE_MAP
};
