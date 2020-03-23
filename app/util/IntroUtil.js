import React from 'react';
import { AsyncStorage } from 'react-native';

export async function setCompletedIntro(isCompleted) {
    return await AsyncStorage.setItem('COMPLETED_INTRO', isCompleted ? 'T' : 'F');
}

export async function isCompletedIntro() {
    return await AsyncStorage.getItem('COMPLETED_INTRO') === 'T';
}