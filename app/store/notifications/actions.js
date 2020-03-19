import * as types from './actionTypes';
import FirebaseService from "../../service/FirebaseService";

export function fetchNotifications(userId) {
    return async(dispatch, getState) => {
        FirebaseService.notificationSync(userId, (data) => dispatch({ type: types.NOTIFICATIONS_FETCHED, data }))
    };
}