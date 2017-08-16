import { keyBy } from 'lodash';

import abortionRapeIncestLifeOfMother from 'app/components/AnswersDatabase/subjects/abortionRapeIncestLifeOfMother';

import bibleExternalTransmission from 'app/components/AnswersDatabase/subjects/bibleExternalTransmission';

import bibleInternalContradictionsBarker from 'app/components/AnswersDatabase/subjects/bibleInternalContradictionsBarker';
import bibleInternalSlavery from 'app/components/AnswersDatabase/subjects/bibleInternalSlavery';

import calvinismForeknowledge from 'app/components/AnswersDatabase/subjects/calvinismForeknowledge';

import complementarianismNoMaleFemale from 'app/components/AnswersDatabase/subjects/complementarianismNoMaleFemale';

import creationDays from 'app/components/AnswersDatabase/subjects/creationDays';

import islamSameGod from 'app/components/AnswersDatabase/subjects/islamSameGod';

import jesusExistence from 'app/components/AnswersDatabase/subjects/jesusExistence';
import jesusGod from 'app/components/AnswersDatabase/subjects/jesusGod';

import miscellaneousArrogance from 'app/components/AnswersDatabase/subjects/miscellaneousArrogance';

import presuppositionalProof from 'app/components/AnswersDatabase/subjects/presuppositionalProof';

import scienceContradict from 'app/components/AnswersDatabase/subjects/scienceContradict';

const ANSWERS_DATABASE = [
    abortionRapeIncestLifeOfMother,

    bibleExternalTransmission,

    bibleInternalContradictionsBarker,
    bibleInternalSlavery,

    calvinismForeknowledge,

    complementarianismNoMaleFemale,

    creationDays,

    islamSameGod,

    jesusExistence,
    jesusGod,

    miscellaneousArrogance,

    presuppositionalProof,

    scienceContradict
];

const ANSWERS_DATABASE_MAP = keyBy(ANSWERS_DATABASE, 'url');

export {
    ANSWERS_DATABASE,
    ANSWERS_DATABASE_MAP
};
