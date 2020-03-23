import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native';
import { Button, Container, Input, Item, Icon, Picker, Fab, Left, Right, Header } from 'native-base';
import { Divider } from 'react-native-elements';
import Modal from "react-native-modal";
import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import IconSVG from '../../../components/Icon/IconSVG'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

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
            nascimento: 'Data de Nascimento',
            isModalVisible: true,
            isModalVisible2: false,
            isVisible: false,
            editar: 'Editar',
            iconEditar: 'Edit',
            corIcons: '#ddd'
        }
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    toggleModal2 = () => {
        this.setState({
            isModalVisible2: !this.state.isModalVisible2,
            editar: 'Salvar',
            iconEditar: 'Done',
            corIcons: '#000'
        })
    };

    handlePicker = (date) => {
        this.setState({
            isVisible: false,
            nascimento: moment(date).format('L'),

        })
    }

    hidePicker = () => {
        this.setState({
            isVisible: false,
        })
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }

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
                <KeyboardAvoidingView
                    style={styles.content}
                    behavior={Platform.select({
                        ios: 'padding',
                        android: 'padding',
                    })}
                >
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', width: '100%' }}>
                        <AeroText style={{ fontSize: 15, color: '#F75400' }}>Dados Pessoais</AeroText>
                        <TouchableOpacity style={styles.button} onPress={this.toggleModal2} >
                            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                <IconSVG name={this.state.iconEditar} height="15" width="15" fill="white" />
                                <AeroText style={{ color: 'white', marginLeft: 5 }} >{this.state.editar}</AeroText>

                            </View>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{}}>
                        <View style={{ justifyContent: "space-around", height: 550 }}>
                            <Item >
                                <Input placeholder='Nome' />
                                <IconSVG name="AccountForm" height="20" width="20" fill={this.state.corIcons} />
                            </Item>
                            <View>

                                <TouchableOpacity style={{}} onPress={this.showPicker}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <AeroText style={{ paddingLeft: 5, color: '#666' }} >{this.state.nascimento}</AeroText>

                                        <View style={{ paddingHorizontal: 5 }}>
                                            <IconSVG name='Date' width='20' height='20' fill={this.state.corIcons} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <Divider style={{ marginTop: 15 }} />
                            </View>

                            <Item >
                                <Input placeholder='Email' />
                                <IconSVG name="Mail" height="20" width="20" fill={this.state.corIcons} />
                            </Item>

                            <Item >
                                <Input placeholder='Senha' secureTextEntry={true} />
                                <IconSVG name="Key" height="20" width="20" fill={this.state.corIcons} />
                            </Item>

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
                    </ScrollView>
                </KeyboardAvoidingView>
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
                    onBackdropPress={() => this.setState({ isModalVisible: false })}
                    animationInTiming={300}
                    animationIn="slideInLeft"
                    animationOut="slideOutRight"
                    coverScreen={true}
                    deviceWidth={deviceWidth}
                    deviceHeight={deviceHeight}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 250, width: '95%', backgroundColor: 'white', padding: 20, justifyContent: 'space-around', borderRadius: 10 }}>
                            <AeroText style={{ color: '#F75400', fontSize: 18 }}>Quem te indicou o App?</AeroText>

                            <Item style={{ backgroundColor: '#ddd', borderRadius: 10, paddingHorizontal: 10 }} >
                                <Input placeholder='Nome' />
                                <IconSVG name="AccountForm" height="20" width="20" fill="#F75400" />
                            </Item>

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
                <Modal
                    isVisible={this.state.isModalVisible2}
                    onBackdropPress={() => this.setState({ isModalVisible2: false })}
                    animationInTiming={300}
                    animationIn="slideInLeft"
                    animationOut="slideOutRight"
                    coverScreen={true}
                    deviceWidth={deviceWidth}
                    deviceHeight={deviceHeight}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 250, width: '95%', backgroundColor: 'white', padding: 20, justifyContent: 'space-around', borderRadius: 10 }}>
                            <AeroText style={{ color: '#F75400', fontSize: 18 }}>Insira a sua senha</AeroText>

                            <Item style={{ backgroundColor: '#ddd', borderRadius: 10, paddingHorizontal: 10 }} >
                                <Input placeholder='Senha' secureTextEntry={true} />
                                <IconSVG name="Key" height="20" width="20" fill="#F75400" />
                            </Item>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Button style={{ backgroundColor: '#ddd', width: 120, justifyContent: 'center', borderRadius: 10 }} onPress={this.toggleModal2} >
                                    <AeroText style={{ color: 'gray' }} >Cancelar</AeroText>
                                </Button>
                                <Button style={{ backgroundColor: '#F75400', width: 120, justifyContent: 'center', borderRadius: 10 }} onPress={this.toggleModal2} >
                                    <AeroText style={{ color: 'white' }} >Confirmar</AeroText>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>
                <DateTimePickerModal
                    mode="date"
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                />
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
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: "center",
        marginRight: 20,
        backgroundColor: "#F75400",
        width: 100,
        height: 30,
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

