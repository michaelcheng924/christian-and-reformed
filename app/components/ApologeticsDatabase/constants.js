import { keyBy } from 'lodash';

import bibleExternalTransmission from 'app/components/ApologeticsDatabase/subjects/bibleExternalTransmission';

import bibleInternalSlavery from 'app/components/ApologeticsDatabase/subjects/bibleInternalSlavery';

const APOLOGETICS_DATABASE = [
    bibleInternalSlavery,
    bibleExternalTransmission,
];

const APOLOGETICS_DATABASE_MAP = keyBy(APOLOGETICS_DATABASE, 'url');

export {
    APOLOGETICS_DATABASE,
    APOLOGETICS_DATABASE_MAP
};
