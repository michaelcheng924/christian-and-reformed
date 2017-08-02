import { keyBy } from 'lodash';

import abortionRapeIncestLifeOfMother from 'app/components/AnswersDatabase/subjects/abortionRapeIncestLifeOfMother';

import bibleExternalTransmission from 'app/components/AnswersDatabase/subjects/bibleExternalTransmission';

import contradictionsSlavery from 'app/components/AnswersDatabase/subjects/contradictionsSlavery';

import calvinismForeknowledge from 'app/components/AnswersDatabase/subjects/calvinismForeknowledge';

import complementarianismNoMaleFemale from 'app/components/AnswersDatabase/subjects/complementarianismNoMaleFemale';

import creationDays from 'app/components/AnswersDatabase/subjects/creationDays';

import homosexualityOrientation from 'app/components/AnswersDatabase/subjects/homosexualityOrientation';

import islamSameGod from 'app/components/AnswersDatabase/subjects/islamSameGod';

const ANSWERS_DATABASE = [
    abortionRapeIncestLifeOfMother,

    bibleExternalTransmission,

    calvinismForeknowledge,

    complementarianismNoMaleFemale,

    // contradictionsSlavery,

    // creationDays,

    // homosexualityOrientation,

    // islamSameGod
];

const ANSWERS_DATABASE_MAP = keyBy(ANSWERS_DATABASE, 'url');

export {
    ANSWERS_DATABASE,
    ANSWERS_DATABASE_MAP
};
