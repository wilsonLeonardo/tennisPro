import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    ImageBackground,
    SafeAreaView
} from 'react-native'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import { AeroText } from '../../components/StyledText'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import IconSVG from '../../components/Icon/IconSVG'
import {logout} from '../../service/AuthService'

function Teacher({ ...props }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.container}>
                <ImageBackground
                    source={require('../../assets/images/HeaderMenu.png')}
                    style={styles.imageBack}
                >
                    <View style={styles.image}></View>


                    <View style={{ flex: 1 }}>
                        <AeroText style={styles.name}>Douglas Henrique</AeroText>
                        <AeroText style={styles.email}>douglashenrique@gmail.com</AeroText>
                    </View>
                </ImageBackground>
                <ScrollView>
                    <DrawerNavigatorItems {...props} />

                </ScrollView>
                
                <TouchableOpacity style={{padding:25}} onPress={() => logout().then(() => props.navigation.navigate('SignedOut'))}>
                    <View style={{ flexDirection: 'row', alignItems:'center' }}>
                        <IconSVG name='Leave' width='20' height='20' fill='#F75400' />
                        <AeroText style={{ color: '#F75400', fontSize:20, paddingHorizontal:10 }}>Sair</AeroText>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Teacher


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
        fontSize: 8,
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