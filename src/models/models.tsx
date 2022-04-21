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
    REG_SUCCESS = 1,
    REG_WON = 2
};

export type UserFormResponse = {
    result: ResponseStatus;
};

export enum CONTENT {
    REGISTER = 0,
    CODE_USED = 1,
    REGISTER_SUCCESS = 2,
    WON_PRIZE = 3
}