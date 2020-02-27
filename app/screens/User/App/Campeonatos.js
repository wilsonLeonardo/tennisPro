import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Modal,
    TouchableHighlight,
    Picker
} from 'react-native';
import { Form, Button, Item, Input, Header, Container, Content, Icon, Footer } from 'native-base';

import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchIcon, DollarIcon, StarIcon, LocationIcon } from '../../../components/Icon/Icon'
import { SearchBar, Divider } from 'react-native-elements';

class Campeonatos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            language: {
                itemValue: '',
                itemIndex: ''
            }
        }
    }
    state = {
        search: '',
        modalVisible: false,
    };

    updateSearch = search => {
        this.setState({ search });
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        const { search } = this.state;
        return (
            <Container style={styles.container}>
                <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={{}}>
                    <View style={styles.header}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
                            <Icon
                                name='arrowleft'
                                type='AntDesign'
                                style={{ color: 'white' }}
                            >
                                <AeroText style={{ fontSize: 22, color: 'white' }}>   Campeonatos</AeroText>
                            </Icon>
                            <Button
                                style={styles.button}
                                onPress={() => {
                                    this.setModalVisible(true);
                                }}>
                                <Icon
                                    name='settings'
                                    type='Octicons'
                                    style={{ color: '#F75400' }}
                                />
                            </Button>
                        </View>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <SearchBar
                            containerStyle={{ backgroundColor: 'transparent', borderBottomColor: 'transparent', borderTopColor: 'transparent' }}
                            inputContainerStyle={styles.item}
                            inputStyle={styles.Input}
                            placeholder="Pesquise por nomes"
                            onChangeText={this.updateSearch}
                            value={search}
                        />

                    </View>
                </ImageBackground>
                <ScrollView >
                    <View style={styles.content}>
                        <View style={styles.buttonList}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{}}>
                                    <AeroText style={styles.nameCampeonato}>Nome do Campeonato</AeroText>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                                    <DollarIcon style={{ height: 10, width: 10, marginRight: 7 }} />
                                    <View style={styles.priceView}>
                                        <AeroText style={styles.price}>149,50</AeroText>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-around", width: 200 }}>
                                <StarIcon style={{ width: 10, height: 10 }} />
                                <AeroText style={{ fontSize: 8 }}>Especial Pro</AeroText>
                                <LocationIcon style={{ width: 10, height: 10 }} />
                                <AeroText style={{ fontSize: 8 }}>Avenida Raimundo</AeroText>
                            </View>
                        </View>
                        <View style={{ marginTop: 22 }}>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={this.state.modalVisible}
                                onRequestClose={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}
                            >
                                <View style={{ backgroundColor: 'transparent', flex: 1, flexDirection: 'row', alignItems: "flex-end" }}>
                                    <View style={{
                                        backgroundColor: 'white', width: '100%', height: '70%', borderTopLeftRadius: 20, borderTopRightRadius: 20,
                                    }}>
                                        <ImageBackground source={require('../../../assets/images/Filtro.png')} style={styles.FitroBottom}>
                                            <TouchableHighlight
                                                style={{ paddingVertical: 20 }}
                                                onPress={() => {
                                                    this.setModalVisible(!this.state.modalVisible);
                                                }}>
                                                <Icon
                                                    name='settings'
                                                    type='Octicons'
                                                    style={{ color: 'white', paddingHorizontal: 10 }}
                                                >
                                                    <AeroText style={{ fontSize: 25 }}>  Filtro</AeroText>
                                                </Icon>
                                            </TouchableHighlight>
                                        </ImageBackground>
                                        <View style={{ flex: 1, padding: 10, justifyContent: 'space-around' }}>
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
                                            <View style={{ height: 70 }}>

                                                <AeroText style={styles.txtFiltro} >Data</AeroText>
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

                                        </View>

                                    </View>
                                </View>
                            </Modal>
                        </View>

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
        paddingHorizontal: 10,
        justifyContent: "space-around",
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
    }

});
