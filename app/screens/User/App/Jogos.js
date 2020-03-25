import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Picker,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import { Form, Button, Item, Input, Header, Container, Content, Icon, Footer, Fab } from 'native-base';
import Modal from "react-native-modal";

import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import { ChatIcon } from '../../../components/Icon/Icon';
import IconSVG from '../../../components/Icon/IconSVG'
import { Divider } from 'react-native-elements';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

class Jogos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            language: {
                itemValue: '',
                itemIndex: ''
            },
            active: false,
            isModalVisible: false,
            isVisible: false,
            data: 'Selecione a data',
            jogos: {
                marcados: false,
                pendentes: false
            }
        }
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    handlePicker = (date) => {
        this.setState({
            isVisible: false,
            data: moment(date).format('L'),

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
        return (
            <Container style={styles.container}>
                <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", height: 60 }}>
                        <View style={{ flexDirection: 'row', justifyContent: "flex-start" }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ paddingTop: 5 }}>
                                <IconSVG name='Back' height='25' width='25' fill='white' />
                            </TouchableOpacity>
                            <AeroText style={{ fontSize: 22, color: 'white' }}>   Jogos</AeroText>
                        </View>
                        <Button
                            style={styles.buttonFilter}
                            onPress={this.toggleModal}
                        >
                            <IconSVG name='Filter' width='25' height='25' fill='#F75400' />
                        </Button>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
                        <Button
                            style={this.state.jogos.marcados ? styles.buttonPress : styles.button}
                            onPress={this.state.jogos.marcados ? () => this.setState({ jogos: { marcados: false } }) : () => this.setState({ jogos: { marcados: true } })}
                            value={this.state.jogos.marcados}
                        >
                            <AeroText style={this.state.jogos.marcados ? styles.textButtonPress : styles.textButton1} >Marcados</AeroText>
                        </Button>
                        <Button
                            style={this.state.jogos.pendentes ? styles.buttonPress : styles.button}
                            onPress={this.state.jogos.pendentes ? () => this.setState({ jogos: { pendentes: false } }) : () => this.setState({ jogos: { pendentes: true } })}
                            value={this.state.jogos.pendentes}
                        >
                            <AeroText style={this.state.jogos.pendentes ? styles.textButtonPress : styles.textButton1} >Pendentes</AeroText>
                        </Button>
                    </View>
                </ImageBackground>
                <ScrollView>
                    <View style={styles.content}>
                        <View style={{ height: 150 }}>

                            <View style={styles.buttonList}>
                                <View style={{ borderRadius: 100, backgroundColor: 'red', height: 50, width: 50, marginLeft: -20 }} />
                                <AeroText style={{ padding: 10 }}>Nome</AeroText>

                                <View style={{ flexDirection: 'row', alignItems: "flex-start", justifyContent: 'space-between' }}>
                                    <TouchableOpacity style={{ position: "absolute", justifyContent: "center", alignItems: 'center', marginLeft: -40, marginTop: 40 }}>
                                        <View style={{ width: 45, height: 45, borderRadius: 50, backgroundColor: 'green', justifyContent: "center", alignItems: "center" }}>
                                            <IconSVG name='Done' height='26' width='26' fill='white' />
                                        </View>
                                        <AeroText style={{ marginTop: 5, color: 'green', fontSize: 10 }}>VITÓRIA</AeroText>
                                    </TouchableOpacity>

                                    <AeroText style={{ padding: 10, fontSize: 20, color: '#F75400' }}>VS</AeroText>
                                    <TouchableOpacity style={{ position: "absolute", justifyContent: "center", alignItems: 'center', marginLeft: 40, marginTop: 40 }}>
                                        <View style={{ width: 45, height: 45, borderRadius: 50, backgroundColor: 'red', justifyContent: "center", alignItems: "center" }}>
                                            <IconSVG name='Close' height='23' width='23' fill='white' />
                                        </View>
                                        <AeroText style={{ marginTop: 5, color: 'red', fontSize: 10 }}>DERROTA</AeroText>
                                    </TouchableOpacity>
                                </View>


                                <AeroText style={{ padding: 10 }}>Nome</AeroText>
                                <View style={{ borderRadius: 100, backgroundColor: 'gray', height: 50, width: 50, marginRight: -20 }} />
                                <View style={{ alignItems: "flex-end", marginRight: -25 }}>

                                    <TouchableOpacity style={{ position: "absolute", width: 40, height: 40, borderRadius: 50, backgroundColor: 'orange', justifyContent: "center", alignItems: "center" }}
                                        onPress={() => this.props.navigation.navigate('Chat')}
                                    >
                                        <ChatIcon />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>


                    </View>
                </ScrollView>
                <View style={{ flex: 1 }}>

                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{}}
                        style={{ height: 80, width: 80, borderRadius: 50, backgroundColor: '#F75400' }}
                        position="bottomRight"
                        onPress={() => [this.setState({ active: !this.state.active }), this.props.navigation.navigate('NewJogo')]}>
                        <IconSVG name='Add' width='30' height='30' fill='white' />
                    </Fab>
                </View>
                <DateTimePickerModal
                    mode="date"
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                />
                <Modal
                    isVisible={this.state.isModalVisible}
                    customBackdrop={
                        <View style={{ flex: 1 }}>
                            <TouchableWithoutFeedback onPress={() => this.setState(this.toggleModal)} >
                                <View style={{ flex: 1, backgroundColor: '#CCCCCC' }}></View>
                            </TouchableWithoutFeedback>
                            <View style={{ backgroundColor: '#CCCCCC', flex: 1, flexDirection: 'row', alignItems: "flex-end" }}>
                                <View style={{ backgroundColor: 'white', width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20, }}>
                                    <ImageBackground source={require('../../../assets/images/Filtro.png')} style={styles.FiltroButton}>
                                        <TouchableWithoutFeedback
                                            style={{ paddingVertical: 20 }}
                                            onPress={this.toggleModal}
                                        >
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={{ paddingHorizontal: 15 }}>
                                                    <IconSVG name='Filter' width='30' height='30' fill='#fff' />
                                                </View>

                                                <AeroText style={{ fontSize: 25, color: 'white' }}>Filtro</AeroText>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </ImageBackground>
                                    <View style={{ backgroundColor: 'white', flex: 1, padding: 10, justifyContent: 'space-around' }}>
                                        <View style={{ height: 70 }}>

                                            <AeroText style={styles.txtFiltro} >Clube</AeroText>
                                            <Picker
                                                selectedValue={this.state.language}
                                                style={{ flex: 1, height: 50 }}
                                                onValueChange={(itemValue, itemIndex) =>
                                                    this.setState({ language: itemValue })
                                                }>
                                                <Picker.Item label="Geral" value="geral" />
                                                <Picker.Item label="Especial Pro" value="especialPro" />
                                                <Picker.Item label="Especial" value="especial" />
                                                <Picker.Item label="inter A" value="a" />
                                                <Picker.Item label="inter B" value="b" />
                                                <Picker.Item label="inter C" value="c" />
                                                <Picker.Item label="Principiante" value="principiante" />
                                                <Picker.Item label="Iniciante" value="iniciante" />
                                            </Picker>
                                            <Divider />
                                        </View>

                                        <TouchableOpacity style={{ height: 30, }} onPress={this.showPicker} >
                                            <View >
                                                <AeroText style={styles.txtFiltro} >Data</AeroText>

                                                <AeroText style={{ paddingVertical: 5 }}>
                                                    {this.state.data}
                                                </AeroText>
                                                <Divider />
                                            </View>
                                        </TouchableOpacity>


                                    </View>
                                </View>
                            </View>
                        </View>
                    }
                />
            </Container>
        )
    }
}


export default Jogos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
    },
    content: {
        paddingTop: -20,
        padding: 20,
        paddingHorizontal: 40,
    },
    header: {
        height: 200,
        justifyContent: 'space-between',
        paddingTop: 40,
        padding: 20
    },
    buttonFilter: {
        justifyContent: "center",
        backgroundColor: "#ffff",
        width: 55,
        borderRadius: 100,
    },
    textButton: {
        color: '#F75400'
    },
    buttonList: {
        width: '100%',
        justifyContent: "space-between",
        alignItems: 'center',
        marginVertical: 20,
        flexDirection: "row",
        height: 70,
        backgroundColor: "#ffff",
        borderWidth: 2,
        borderRightWidth: 4,
        borderRadius: 50,
        borderColor: '#ddd',
        borderBottomWidth: 4,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 9,
    },
    FiltroButton: {
        width: '100%',
        height: 100,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'orange',
        justifyContent: "center"

    },
    txtFiltro: {
        color: '#F75400'
    },
    button: {
        flexDirection: 'column',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        backgroundColor: "#E2E2E2",
        width: 130,
        borderRadius: 100,
    },
    buttonPress: {
        flexDirection: 'column',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        backgroundColor: "#F75400",
        width: 130,
        borderRadius: 100,
    },
    textButton1: {
        color: 'gray'
    },
    textButtonPress: {
        color: 'white'
    },
});
