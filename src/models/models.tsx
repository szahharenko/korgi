export const API = 'https://vichywater.eu/api/';

export type UserSubmitForm = {
    action: 'register';
    email: string;
    phoneNumber: string;
    acceptTerms: boolean;
    code: string;
    firstname: string;
    lastname: string;
};

export enum ResponseStatus {
    CODE_USED = 0,
    DONT_EXIST = 1,
    REG_SUCCESS = 2,
    REG_WON = 3
};
export interface PrizeDetails {
    prize_type: 0 | 2 | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    prize_name: string
}
export interface UserFormResponse {
    result: ResponseStatus
    prize: PrizeDetails
};