import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableHighlight,
    Picker,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import { Form, Button, Item, Input, Header, Container, Content, Icon, Footer } from 'native-base';
import Modal from "react-native-modal";

import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchIcon, DollarIcon, StarIcon, LocationIcon } from '../../../components/Icon/Icon'
import { SearchBar, Divider } from 'react-native-elements';
import IconSVG from '../../../components/Icon/IconSVG';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

class Campeonatos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            language: {
                itemValue: '',
                itemIndex: ''
            },
            search: '',
            isModalVisible: false,
            isModalVisible2: false,
            isVisible: false,
            data: 'Selecione a Data'
        }
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    toggleModal2 = () => {
        this.setState({ isModalVisible2: !this.state.isModalVisible2 });
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
        const deviceWidth = Dimensions.get("window").width;
        const deviceHeight = Dimensions.get("window").height
        const { search } = this.state;
        return (
            <Container style={styles.container}>
                <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={{}}>
                    <View style={styles.header}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: "flex-start" }}>
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ paddingTop: 5 }}>
                                    <IconSVG name='Back' height='25' width='25' fill='white' />
                                </TouchableOpacity>
                                <AeroText style={{ fontSize: 22, color: 'white' }}>   Campeonatos</AeroText>
                            </View>
                            <Button
                                style={styles.button}
                                onPress={this.toggleModal}
                            >
                                <IconSVG name='Filter' width='25' height='25' fill='#F75400' />
                            </Button>
                        </View>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <SearchBar
                            containerStyle={{ backgroundColor: 'transparent', borderBottomColor: 'transparent', borderTopColor: 'transparent' }}
                            inputContainerStyle={styles.item}
                            inputStyle={styles.Input}
                            searchIcon={<IconSVG name='Search' height='20' width='20' fill='black' />}
                            onChangeText={this.updateSearch}
                            value={search}
                        />

                    </View>
                </ImageBackground>
                <ScrollView >
                    <View style={styles.content}>
                        <TouchableOpacity style={styles.buttonList}
                            onPress={this.toggleModal2}
                        >
                            <ImageBackground source={require('../../../assets/images/campeonatoBack.png')} style={{ flex: 1, paddingHorizontal: 10 }}>
                                <View style={{ justifyContent: 'space-around', flex: 1 }} >

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{}}>
                                            <AeroText style={styles.nameCampeonato}>Nome do Campeonato</AeroText>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                                            <IconSVG name='Money' width='15' height='15' fill='#F75400' />
                                            <View style={styles.priceView}>
                                                <AeroText style={styles.price}>149,50</AeroText>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", justifyContent: "space-around", width: 200 }}>
                                        <IconSVG name='Star' width='10' height='10' fill='#F75400' />
                                        <AeroText style={{ fontSize: 8, color: '#808080' }}>Especial Pro</AeroText>
                                        <IconSVG name='Maps' width='10' height='10' fill='#F75400' />
                                        <AeroText style={{ fontSize: 8, color: '#808080' }}>Avenida Raimundo</AeroText>
                                    </View>
                                </View>
                            </ImageBackground>

                        </TouchableOpacity>

                        <Modal
                            isVisible={this.state.isModalVisible}
                            customBackdrop={
                                <View style={{ flex: 1 }}>
                                    <TouchableWithoutFeedback onPress={() => this.setState(this.toggleModal)} >
                                        <View style={{ flex: 1, backgroundColor: 'gray' }}></View>
                                    </TouchableWithoutFeedback>
                                    <View style={{ backgroundColor: 'gray', flex: 2, flexDirection: 'row', alignItems: "flex-end" }}>
                                        <View style={{ backgroundColor: 'white', width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                                            <ImageBackground source={require('../../../assets/images/Filtro.png')} style={styles.FitroBottom}>
                                                <TouchableWithoutFeedback
                                                    style={{ paddingVertical: 20 }}
                                                    onPress={this.toggleModal}
                                                >
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <View style={{ paddingHorizontal: 15 }}>
                                                            <IconSVG name='Filter' width='30' height='30' fill='white' />
                                                        </View>

                                                        <AeroText style={{ fontSize: 25, color: 'white' }}>Filtro</AeroText>
                                                    </View>
                                                </TouchableWithoutFeedback>
                                            </ImageBackground>


                                            <View style={{ flex: 1, backgroundColor: 'white', padding: 10, justifyContent: 'space-around' }}>
                                                <View style={{ height: 70 }}>

                                                    <AeroText style={styles.txtFiltro} >Prêmio</AeroText>
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
                                                <View style={{ height: 70 }}>

                                                    <AeroText style={styles.txtFiltro} >Cidade</AeroText>
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
                                                <View style={{ height: 70 }}>

                                                    <AeroText style={styles.txtFiltro} >Nível</AeroText>
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

                            animationInTiming={300}
                            animationIn="slideInUp"
                            animationOut="slideOutDown"
                        />

                        <DateTimePickerModal
                            mode="date"
                            isVisible={this.state.isVisible}
                            onConfirm={this.handlePicker}
                            onCancel={this.hidePicker}
                        />

                        <Modal
                            isVisible={this.state.isModalVisible2}
                            animationInTiming={300}
                            animationIn="slideInLeft"
                            animationOut="slideOutRight"
                            coverScreen={true}
                            deviceWidth={deviceWidth}
                            deviceHeight={deviceHeight}
                            onBackdropPress={() => this.setState({ isModalVisible2: false })}
                        >
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: '55%', width: '95%', backgroundColor: 'white', justifyContent: 'space-between', borderRadius: 20 }}>
                                    <ImageBackground source={require('../../../assets/images/Filtro.png')} style={styles.CampeonatosModal}>
                                        <TouchableHighlight
                                            style={{ paddingVertical: 20 }}
                                            onPress={this.toggleModal2}
                                        >
                                            <AeroText style={{ fontSize: 18, color: 'white' }}>   Nome do Campeonato</AeroText>
                                        </TouchableHighlight>
                                    </ImageBackground>
                                    <View style={{ padding: 10, flex: 1 }}>
                                        <ImageBackground source={require('../../../assets/images/campeonatoModalBack.png')} style={{ flex: 1, justifyContent: 'space-around' }}>
                                            <View style={styles.CampeonatosModalTxtView}>
                                                <IconSVG name='Star' width='15' height='15' fill='#F75400' />
                                                <AeroText style={styles.CampeonatosModalTxt}>Especial Pro, Inter A, Inter B</AeroText>
                                            </View>
                                            <View style={styles.CampeonatosModalTxtView}>
                                                <IconSVG name='Maps' width='15' height='15' fill='#F75400' />
                                                <AeroText style={styles.CampeonatosModalTxt}>Avenida Raimundo Pereira de Magalhães, 254</AeroText>
                                            </View>
                                            <View style={styles.CampeonatosModalTxtView}>
                                                <IconSVG name='Trophy' width='15' height='15' fill='#F75400' />
                                                <AeroText style={styles.CampeonatosModalTxt}>Valor do prêmio</AeroText>
                                                <AeroText style={{ color: '#F75400' }}>10.500 R$</AeroText>
                                            </View>
                                            <View style={styles.CampeonatosModalTxtView}>
                                                <IconSVG name='Money' width='15' height='15' fill='#F75400' />
                                                <AeroText style={styles.CampeonatosModalTxt}>Valor de Inscrição</AeroText>
                                                <AeroText style={{ color: '#F75400' }}>140.50 R$</AeroText>
                                            </View>

                                        </ImageBackground>
                                        <Button block style={{ backgroundColor: '#F75400', justifyContent: 'center', borderRadius: 10 }} onPress={this.toggleModal2} >
                                            <AeroText style={{ color: 'white' }} >Inscrever</AeroText>
                                        </Button>

                                    </View>
                                </View>
                            </View>
                        </Modal>

                    </View>
                </ScrollView>
            </Container>
        )
    }
}

Campeonatos.navigationOptions = {
    headerShown: false
}

export default Campeonatos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    content: {
        padding: 40,
    },
    header: {
        flexDirection: 'row',
        height: 150,
        justifyContent: 'space-between',
        paddingTop: 40,
        padding: 20
    },
    button: {
        justifyContent: "center",
        backgroundColor: "#ffff",
        width: 55,
        borderRadius: 100,
    },
    textButton: {
        color: '#F75400'
    },
    buttonList: {
        marginBottom: 20,
        height: 110,
        backgroundColor: "#ffff",
        borderWidth: 2,
        borderRightWidth: 4,
        borderRadius: 20,
        borderColor: '#ddd',
        borderBottomWidth: 4,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 9,
    },
    item: {
        backgroundColor: "#ffff",
        height: 40,
        width: 300,
        elevation: 2,
        borderRadius: 10
    },
    iconSeach: {
        margin: 10
    },
    nameCampeonato: {
        fontSize: 13,
        color: '#808080'
    },
    dollar: {
        color: '#F75400',
        width: 10,
        height: 20,
        marginRight: 10
    },
    priceView: {
        backgroundColor: '#F75400',
        borderRadius: 5,
        alignItems: 'center',
        width: 45,
        height: 17
    },
    price: {
        color: 'white',
        fontSize: 10,
    },
    starIcon: {
        color: '#F75400',
    },
    Input: {
        fontSize: 15,
        fontFamily: 'Aero',
    },
    FitroBottom: {
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
    CampeonatosModal: {
        width: '100%',
        height: 80,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'orange',
        justifyContent: "center",
    },
    CampeonatosModalTxt: {
        fontSize: 13,
        paddingHorizontal: 10
    },
    CampeonatosModalTxtView: {
        flexDirection: 'row',
        alignItems: 'center'
    }


});
