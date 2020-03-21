import React, { Component } from 'react'
import {
    View,
    Image,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    Alert
} from 'react-native'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import { AeroText } from '../../components/StyledText'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import IconSVG from '../../components/Icon/IconSVG'
import {logout} from '../../service/AuthService'
import HttpService from '../../service/HttpService'
import * as userActions from '../../store/user/actions'
import * as teacherActions from '../../store/teacher/actions'
import {connect} from 'react-redux'

class Teacher extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:{}
        }
    }
    SignOut(){
        Alert.alert('Sair', 'Tem certeza que deseja sair?',[
            {text: 'Sim', onPress: () => this.SignOutConfirm()},
            {text: 'Cancelar', style:'cancel'},
        ])
    }
    SignOutConfirm(){
        this.props.dispatch(
            userActions.clear(),
            teacherActions.clear()
        )
        logout().then(() => this.props.navigation.navigate('SignedOut'))
    }
    render(){
        const {username, email} = this.props.me.meTeacher
        return (
            <SafeAreaView style={{ flex: 1 }}>
    
                <View style={styles.container}>
                    <ImageBackground
                        source={require('../../assets/images/HeaderMenu.png')}
                        style={styles.imageBack}
                    >
                        <View style={styles.image}></View>
    
    
                        <View style={{ flex: 1 }}>
                            <AeroText style={styles.name}>{username}</AeroText>
                            <AeroText style={styles.email}>{email}</AeroText>
                        </View>
                    </ImageBackground>
                    <ScrollView>
                        <DrawerNavigatorItems {...this.props} />
    
                    </ScrollView>
                    
                    <TouchableOpacity style={{ padding: 25 }} onPress={() => this.SignOut()}>
                        <View style={{ flexDirection: 'row', alignItems:'center' }}>
                            <IconSVG name='Leave' width='20' height='20' fill='#F75400' />
                            <AeroText style={{ color: '#F75400', fontSize:20, paddingHorizontal:10 }}>Sair</AeroText>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}
const mapStateToProps = state => ({
    me: state.meTeacher
})

export default connect(mapStateToProps, null)(Teacher)


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 40,
        marginBottom: 25
    },
    imageBack: {
        flexDirection: 'row',
        resizeMode: 'contain',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 15,
        color: 'white',
    },
    email: {
        fontSize: 12,
        color: 'white',
    },
    image: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 50,
        width: 60,
        height: 60
    },
});