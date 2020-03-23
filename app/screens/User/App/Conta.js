import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Dimensions,
    Platform,
} from 'react-native';
import { Form, Button, Item, Header, Container, Content, Icon, Footer, Picker, Input } from 'native-base';
import { Divider } from 'react-native-elements';
import Modal from "react-native-modal";
import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import IconSVG from '../../../components/Icon/IconSVG'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

class Conta extends Component {
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
            seg: false,
            ter: false,
            qua: false,
            qui: false,
            sex: false,
            sab: false,
            dom: false,
            entrada: 'Entrada',
            saida: 'Saída',
            isModalVisible: false,
            isVisible: false,
            isVisible2: false,
            isVisible3: false,
            editar: 'Editar',
            iconEditar: 'Edit',
            corIcons:'#ddd'

        }
    }

    toggleModal = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible,
            editar: 'Salvar',
            iconEditar: 'Done',
            corIcons:'#000'
        });
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
    handlePicker2 = (time) => {
        this.setState({
            isVisible2: false,
            entrada: moment(time).format('HH:mm')

        })
    }

    hidePicker2 = () => {
        this.setState({
            isVisible2: false,
        })
    }

    showPicker2 = () => {
        this.setState({
            isVisible2: true
        })
    }

    handlePicker3 = (time) => {
        this.setState({
            isVisible3: false,
            saida: moment(time).format('HH:mm')

        })
    }

    hidePicker3 = () => {
        this.setState({
            isVisible3: false,
        })
    }

    showPicker3 = () => {
        this.setState({
            isVisible3: true
        })
    }

    render() {
        const deviceWidth = Dimensions.get("window").width;
        const deviceHeight = Dimensions.get("window").height
        return (
            <Container style={styles.container}>
                <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", width: '100%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: "flex-start" }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ paddingTop: 5 }}>
                                <IconSVG name='Back' height='25' width='25' fill='white' />
                            </TouchableOpacity>
                            <AeroText style={{ fontSize: 22, color: 'white' }}>   Conta</AeroText>
                        </View>
                        <Button style={styles.button} onPress={this.toggleModal}>
                            <IconSVG name={this.state.iconEditar} height="15" width="15" fill="#F75400" />
                            <AeroText style={{ color: '#F75400', marginLeft: 5 }} >{this.state.editar}</AeroText>
                        </Button>
                    </View>
                    <View style={{ alignSelf: "center", width: 130, height: 130, borderRadius: 200, backgroundColor: 'white', borderWidth: 2, borderColor: '#ddd' }} />
                </ImageBackground>
                <KeyboardAvoidingView
                    style={styles.content}
                    behavior={Platform.select({
                        ios: 'padding',
                        android: 'padding',
                    })}
                >
                    <ScrollView style={{}}>
                        <View style={{ justifyContent: "space-around", height: 450 }}>
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
                                <Divider style={{ backgroundColor: '#ddd', height: 1 }} />
                            </View>
                        </View>
                        <View style={{ paddingVertical: 30 }}>

                            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                <AeroText style={{ color: '#F75400', fontSize: 18 }}>Clubes</AeroText>
                                <View style={styles.bottonAdd}>
                                    <IconSVG name="Add" height="15" width="15" fill="#fff" />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 10 }}>
                                <AeroText style={{ color: "#808080" }}>Alphaville Esporte Clube</AeroText>
                                <View style={{ borderRadius: 30, height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}>
                                    <IconSVG name="Remove" height="15" width="15" fill="#ddd" />
                                </View>
                            </View>
                        </View>

                        <View>
                            <AeroText style={{ color: '#F75400', fontSize: 18 }}>Disponibilidade</AeroText>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: "space-around", paddingTop: 40 }}>
                                <TouchableOpacity style={this.state.seg ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                                    onPress={this.state.seg ? () => this.setState({ seg: false }) : () => this.setState({ seg: true })}
                                    value={this.state.seg}>
                                    <AeroText style={this.state.seg ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana} >Seg</AeroText>
                                </TouchableOpacity>
                                <TouchableOpacity style={this.state.ter ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                                    onPress={this.state.ter ? () => this.setState({ ter: false }) : () => this.setState({ ter: true })}
                                    value={this.state.ter}>
                                    <AeroText style={this.state.ter ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana} >Ter</AeroText>
                                </TouchableOpacity>
                                <TouchableOpacity style={this.state.qua ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                                    onPress={this.state.qua ? () => this.setState({ qua: false }) : () => this.setState({ qua: true })}
                                    value={this.state.qua}>
                                    <AeroText style={this.state.qua ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana}  >Qua</AeroText>
                                </TouchableOpacity>
                                <TouchableOpacity style={this.state.qui ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                                    onPress={this.state.qui ? () => this.setState({ qui: false }) : () => this.setState({ qui: true })}
                                    value={this.state.qui}>
                                    <AeroText style={this.state.qui ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana} >Qui</AeroText>
                                </TouchableOpacity>
                                <TouchableOpacity style={this.state.sex ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                                    onPress={this.state.sex ? () => this.setState({ sex: false }) : () => this.setState({ sex: true })}
                                    value={this.state.sex}>
                                    <AeroText style={this.state.sex ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana} >Sex</AeroText>
                                </TouchableOpacity>
                                <TouchableOpacity style={this.state.sab ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                                    onPress={this.state.sab ? () => this.setState({ sab: false }) : () => this.setState({ sab: true })}
                                    value={this.state.sab}>
                                    <AeroText style={this.state.sab ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana} >Sab</AeroText>
                                </TouchableOpacity>
                                <TouchableOpacity style={this.state.dom ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                                    onPress={this.state.dom ? () => this.setState({ dom: false }) : () => this.setState({ dom: true })}
                                    value={this.state.dom}>
                                    <AeroText style={this.state.dom ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana} >Dom</AeroText>
                                </TouchableOpacity>
                            </View>
                            <Form style={{ flexDirection: 'row', paddingTop: 40, justifyContent: 'center', alignItems: 'center' }}>
                                {/* <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex: 1 }]}>
                            <Input
                                style={styles.Input}
                                placeholder='Entrada'
                                onChangeText={(entrada) => this.setState({ entrada })}
                                value={this.state.entrada}
                            />
                        </Item> */}
                                <TouchableOpacity style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex: 1, height: 50, justifyContent: 'center' }]} onPress={this.showPicker2} >
                                    <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems:'center' }}>

                                        <AeroText style={{}}>
                                            {this.state.entrada}
                                        </AeroText>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ justifyContent: "center", height: 40, width: 35 }}>
                                    <AeroText style={{}}> até</AeroText>
                                </View>
                                {/* <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex: 1 }]}>
                            <Input
                                style={styles.Input}
                                placeholder='Saída'
                                onChangeText={(saida) => this.setState({ saida })}
                                value={this.state.saida}
                            />
                        </Item> */}
                                <TouchableOpacity style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex: 1, height: 50, justifyContent: 'center' }]} onPress={this.showPicker3} >
                                    <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems:'center' }}>

                                        <AeroText style={{}}>
                                            {this.state.saida}
                                        </AeroText>
                                    </View>
                                </TouchableOpacity>
                            </Form>

                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
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
                            <AeroText style={{ color: '#F75400', fontSize: 18 }}>Insira a sua senha</AeroText>

                            <Item style={{ backgroundColor: '#ddd', borderRadius: 10, paddingHorizontal: 10 }} >
                                <Input placeholder='Senha' secureTextEntry={true} />
                                <IconSVG name="Key" height="20" width="20" fill="#F75400" />
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
                <DateTimePickerModal
                    mode="date"
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                />
                <DateTimePickerModal
                    mode="time"
                    isVisible={this.state.isVisible2}
                    onConfirm={this.handlePicker2}
                    onCancel={this.hidePicker2}
                />
                <DateTimePickerModal
                    mode="time"
                    isVisible={this.state.isVisible3}
                    onConfirm={this.handlePicker3}
                    onCancel={this.hidePicker3}
                />
            </Container>
        )
    }
}

export default Conta

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        padding: 30,
    },
    header: {
        alignItems: 'flex-start',
        height: 200,
        justifyContent: 'space-between',
        paddingTop: 40,
        padding: 10,
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
    bottonAdd: {
        backgroundColor: "#ddd",
        borderRadius: 30,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottonAddPress: {
        backgroundColor: "#F75400",
        borderRadius: 30,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
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
    },
    bottomDiasDaSemana: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        backgroundColor: '#f7f7f7'
    },
    bottomDiasDaSemanaPress: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        backgroundColor: '#F75400'
    },
    fontDiasDaSemana: {
        fontSize: 10,
        fontFamily: 'Aero'
    },
    fontDiasDaSemanaPress: {
        fontSize: 10,
        fontFamily: 'Aero',
        color: 'white'
    },

});
