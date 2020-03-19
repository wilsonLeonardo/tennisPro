import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Button, Container, Item,Icon, Picker, Fab, Left,Right,Header } from 'native-base';
import { Input, Divider } from 'react-native-elements';
import Modal from "react-native-modal";
import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import IconSVG from '../../../components/Icon/IconSVG'

class HomeTeacher extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: {
                pessoal: false,
                clube: false,
            },
            language: {
                itemValue: '',
                itemIndex: ''
            },
            isModalVisible: true
        }
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        const deviceWidth = Dimensions.get("window").width;
        const deviceHeight = Dimensions.get("window").height
            return (
                <Container>
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={
                                () => this.props.navigation.openDrawer()
                            }
                        >
                            <IconSVG name='Menu' height='22' width='22' fill='#F75400' />
                        </TouchableOpacity>
                        <ImageBackground
                            source={require('../../../assets/images/Conta.png')} style={styles.imgUser}
                        />
                    </View>
                    <View style={styles.content}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', width: '100%' }}>
                            <AeroText style={{ fontSize: 15, color: '#F75400' }}>Dados Pessoais</AeroText>
                            <Button style={styles.button} >
                                <IconSVG name="Edit" height="15" width="15" fill="#F75400" />
                                <AeroText style={{ color: '#F75400', marginLeft: 5 }} >Editar</AeroText>
                            </Button>
                        </View>
                        <View style={{ flex: 1, justifyContent: "space-around" }}>
                            <Input placeholder='Nome' rightIcon={<IconSVG name="AccountForm" height="20" width="20" fill="#ddd" />} />

                            <Input placeholder='Data de Nascimento' rightIcon={<IconSVG name="Date" height="20" width="20" fill="#ddd" />} />

                            <Input placeholder='Email' rightIcon={<IconSVG name="Mail" height="20" width="20" fill="#ddd" />} />

                            <Input placeholder='Senha' rightIcon={<IconSVG name="Key" height="20" width="20" fill="#ddd" />} />

                            <View style={{ height: 40, paddingHorizontal: 10 }}>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={{ flex: 1, height: 50 }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ language: itemValue })
                                    }
                                >
                                    <Picker.Item label="Português (Brasil)" value="portugues" />
                                    <Picker.Item label="Inglês" value="ingles" />
                                    <Picker.Item label="Espanhol" value="espanhol" />
                                </Picker>
                                <Divider style={{ backgroundColor: '#000' }} />
                            </View>
                        </View>


                    </View>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: '#F75400' }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}>
                        <IconSVG name='Chat' width='30' height='30' fill='white' />
                    </Fab>
                    <Modal
                    isVisible={this.state.isModalVisible}
                    animationInTiming={300}
                    animationIn="slideInLeft"
                    animationOut="slideOutRight"
                    coverScreen={true}
                    deviceWidth={deviceWidth}
                    deviceHeight={deviceHeight}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: '40%', width: '95%', backgroundColor: 'white', padding: 20, justifyContent: 'space-around', borderRadius: 10 }}>
                            <AeroText style={{ color: '#F75400', fontSize: 18 }}>Quem te indicou o App?</AeroText>

                            <Input placeholder='Nome' rightIcon={<IconSVG name="AccountForm" height="20" width="20" fill="#F75400" />} />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Button style={{ backgroundColor: '#ddd', width: 120, justifyContent: 'center', borderRadius: 10 }} onPress={this.toggleModal} >
                                    <AeroText style={{ color: 'gray' }} >Cancelar</AeroText>
                                </Button>
                                <Button style={{ backgroundColor: '#F75400', width: 120, justifyContent: 'center', borderRadius: 10 }} onPress={this.toggleModal} >
                                    <AeroText style={{ color: 'white' }} >Confirmar</AeroText>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>
                </Container >

            )
        }
    }

HomeTeacher.navigationOptions = {
    headerShown: false
}

export default HomeTeacher

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#ffff",
        },
        content: {
            flex: 1,
            padding: 30,
        },
        header: {
            flexDirection: 'row',
            height: 120,
            justifyContent: 'space-between',
            paddingTop: 40,
            padding: 20
        },
        imgUser: {
            width: 70,
            height: 70,
        },
        button: {
            alignSelf: 'flex-end',
            justifyContent: "center",
            marginRight: 20,
            backgroundColor: "#ffff",
            width: 100,
            borderRadius: 100,
        },
        textButton: {
            fontSize: 18,
            color: '#607d8b'
        },
        textButtonPress: {
            fontSize: 18,
            color: 'white'
        },
        buttonList: {
            flex: 1,
            flexDirection: "row",
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            marginHorizontal: 10,
            marginVertical: 10,
            width: 60,
            height: 40,
            backgroundColor: "#EBF0EE",
            borderWidth: 2,
            borderRightWidth: 4,
            borderRadius: 25,
            borderColor: '#ddd',
            borderBottomWidth: 4,
            shadowColor: '#000',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 2,
            shadowRadius: 9,
        },
        buttonListPress: {
            flex: 1,
            flexDirection: "row",
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            marginHorizontal: 10,
            marginVertical: 10,
            width: 60,
            height: 40,
            backgroundColor: "#F75400",
            borderWidth: 2,
            borderRightWidth: 4,
            borderRadius: 25,
            borderColor: '#ddd',
            borderBottomWidth: 4,
            shadowColor: '#000',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 2,
            shadowRadius: 9,
        },
        item: {
            backgroundColor: 'red',
            flexDirection: 'row',
            backgroundColor: "#ffff",
            height: 50,
            width: 300,
            elevation: 2,
            borderRadius: 10
        },
        iconSeach: {
            margin: 10
        },
        Input: {
            fontSize: 17,
            fontFamily: 'Aero',
        },
        bottom: {
            flex: 1,
            padding: 30,
            alignItems: "flex-start"
        }
    });

