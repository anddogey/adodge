import { SCREEN_NAMES } from './screenNames';
export type RootNativeStackParamsList = {
    [SCREEN_NAMES.HOME]: undefined;
    [SCREEN_NAMES.DAILY_OVERVIEW]: {
        date: Date;
    };
    [SCREEN_NAMES.EDIT]: undefined;
    [SCREEN_NAMES.SEARCH]: undefined;
};
