import * as types from './actionTypes';
import HttpService from "../../service/HttpService";
import _ from 'lodash';
import moment from 'moment';

export function fetchMessages() {
    return async(dispatch) => {
        dispatch({ type: types.MESSAGES_REFRESHING, refreshing: true });
        
        HttpService
            .find('me/messages')
            .then((messages) => dispatch({ type: types.MESSAGES_FETCHED, messages}))
            .finally(() => dispatch({ type: types.MESSAGES_REFRESHING, refreshing: false }))

    };
}

export const clear = () => async(dispatch) => dispatch({ type: types.MESSAGES_CLEARING });