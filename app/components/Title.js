import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {AeroText} from './StyledText'
import * as Icon from '../components/Icon/Icon'

export function TitleTennis(props) {
  return (
    <View style={styles.title}>
        <View style={styles.caixa} >
            {props.Icon == 'Check' ? <Icon.CheckIcon/> : props.Icon == 'Person' ? <Icon.PersonIcon/> :
             props.Icon == 'Ball' ? <Icon.Ball2Icon/> : props.Icon == 'Star' ? <Icon.StarIcon/> : null}
            <AeroText style={[{ fontSize: 23, left:10, alignItems: 'center', color: '#f75400' },props.style]}>
                {`${props.placeholder}`}
            </AeroText>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    caixa: {
        flexDirection:'row',
        width: 300,
        height: 56,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
