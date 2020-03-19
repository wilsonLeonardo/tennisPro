import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    Button
} from 'react-native'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import { AeroText } from '../../components/StyledText'
import { ScrollView } from 'react-native-gesture-handler'
import {logout} from '../../service/AuthService'

function CustomDrawer({ ...props }) {
    return (
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
            <Button title='Sair' onPress={() =>  logout().then(() => props.navigation.navigate("SignedOut"))}/>
            </ScrollView>

            

        </View>
    )
}

export default CustomDrawer


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
        height: 150,
    },
    name: {
        marginTop: 30,
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