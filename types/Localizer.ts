import * as locales from '@/i18n/locales.json';

export enum LocalizerActionTypes {
  LOCALIZE = 'LOCALIZE',
}

interface Localize {
    type: LocalizerActionTypes.LOCALIZE;
    payload: {
        locale: string;
    };
}

export type LocalizerActions = Localize;

export type Localizer = { [key: string]: (typeof locales)['en-US'] };
