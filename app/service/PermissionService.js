import React from 'react';
import { getUser } from "./AuthService";
import * as Permissions from "expo-permissions";
import HttpService from "./HttpService";

export function canSendMessage() {
    return getUser().then((user) => (user.profile === 'AGENT'));
}

export function canRequestContact() {
    return getUser().then((user) => (user.profile === 'MOBILE'));
}

export function canViewActivityBranch() {
    return getUser().then((user) => ['ADMIN', 'AGENT'].indexOf(user.profile) !== -1);
}

export function canShareOffer() {
    return getUser().then((user) => ['ADMIN', 'AGENT'].indexOf(user.profile) !== -1);
}

export function canSendProposal() {
    return getUser().then((user) => (user.profile === 'AGENT'));
}

export function hasAgentProfile() {
    return getUser().then((user) => (user.profile === 'AGENT'));
}

export async function syncDeviceIdentifier() {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;

    
    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
        // Android remote notification permissions are granted during the app
        // install, so this will only ask on iOS
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
        return;
    }

    // Get the token that uniquely identifies this device
    let deviceIdentifier = await Notifications.getExpoPushTokenAsync();
    console.log('Our token', deviceIdentifier);

    HttpService
        .patch('users/device-identifier', {}, {deviceIdentifier});
}