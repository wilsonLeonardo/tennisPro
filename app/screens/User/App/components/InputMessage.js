import React from 'react';
import {View, TouchableOpacity, StyleSheet } from 'react-native';
import 'moment/locale/pt-br';
import moment from "moment";
import IconSVG from '../../../../components/Icon/IconSVG'
import {Item, Input } from 'native-base';

export default class InputMessage extends React.Component {

    state = {
        content: ''
    };

    send() {
        if (this.state.content === '') return;

        this.props.onSend({
            content: this.state.content,
            time: moment().format("YYYY-MM-DD HH:mm:ss")
        });

        this.setState({ content: '' });
    }

    render() {
        return (
             <View style={[styles.container, { marginBottom: this.props.keyboardHeight }]}>
                        <Item regular style={{ borderWidth: 2, borderColor: '#ddd', borderRadius: 25, paddingHorizontal:10 }} >
                            <Input placeholder='Digite uma mensagem'
                                value={this.state.content}
                                onChangeText={(content) => this.setState({content})}
                            />
                             <TouchableOpacity onPress={this.send.bind(this)}>
                                    <IconSVG name="Send" height="20" width="20" fill="#F75400" />
                             </TouchableOpacity>
                        </Item>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: 60,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    
})