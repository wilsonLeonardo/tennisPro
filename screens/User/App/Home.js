import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import { Form, Button, Item, Input, Header, Container, Content, Icon, Footer } from 'native-base';

import { AeroText } from '../../../components/StyledText';

class Home extends Component {
    render() {
        return (
            <View style={{justifyContent:'center'}}>
                <AeroText styles={{fontSize: 20}}>Home user</AeroText>
            </View>
        )
    }
}

Home.navigationOptions = {
    headerShown: false
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
    },
    content: {
        padding: 40,
    },
});
