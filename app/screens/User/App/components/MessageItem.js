import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Dimensions } from 'react-native';
import { AeroText } from '../../../../components/StyledText';
import moment from "moment";
import {DateContainer} from "./DateContainer";
import {setRelativeTimeTranslate} from '../../../../util/relativeTimeTranslateLocale';

setRelativeTimeTranslate();

const boxWidth = Dimensions.get('window').width - 220;


export default class MessageItem extends React.Component {
    render() {

        const { message} = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => this.props.onPress({
                        id: message.id,
                        title: message.name,
                        avatar: message.avatar
                    })}
                >                
                    <View style={styles.avatar}>
                        {message.avatar
                            && (<Image source={{uri: message.avatar}} resizeMode="cover" style={{ width: 40,  height: 40 }}/>)}
                    </View>
                    <View style={{flex: 1, paddingHorizontal: 20, paddingTop: 10, paddingBottom: 20}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: "100%", flex: 1}}>
                            <View style={{width: boxWidth}}>
                                <AeroText type={message.pending ? 'Bold': 'Regular'} style={styles.username}>
                                    {message.name}
                                </AeroText>
                            </View>
                            <View style={styles.dateContainer}>
                                <DateContainer value={moment(message.updatedAt).fromNow()}/>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AeroText style={styles.message}>
                                { message.lastMessage }
                            </AeroText>
                            { message.pending && (
                                <View style={styles.indicator}>
                                    <AeroText type='Bold' style={styles.indicatorText}>1</AeroText>
                                </View>
                            ) }
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingTop: 10,
        paddingBottom: 25,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'center',

        backgroundColor: '#ffffff',
        shadowColor: '#a4a4a4',
        shadowOffset: {
            width: 0,
            height: 25
        },
        shadowRadius: 10,
        shadowOpacity: 0.3,
        elevation: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60
    },
    broker: {
        fontSize: 14,
        color: '#bbbbbb',
    },
    product: {
        fontSize: 15,
        fontWeight:'bold',
        width: 220,
        color: '#00c070'
    },
    username: {
        fontSize: 15,
        flexWrap: "wrap"
    },
    message: {
        flex: 1,
        fontSize: 14,
        marginTop: 6,
    },
    dateContainer: {
        width: 90,
        alignItems: 'flex-end',
    },
    indicator: {
       backgroundColor: '#b62a26',
       borderRadius: 50,
       width: 20,
       height: 20,
       alignItems: 'center',
       justifyContent: 'center',
       marginLeft: 10,
    },
    indicatorText: {
        color: '#FFF',
        fontSize: 12,
    },
    offerTypeContainer: {
        position: 'absolute',
        right: 0,
        top: 0,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderBottomLeftRadius: 10,
        // elevation: 15,
        zIndex: 3,
    },
    offerTypeLabel: {
        color: '#FFFFFF',
        fontSize: 10,
    }
});