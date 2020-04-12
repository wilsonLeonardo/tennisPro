import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Picker,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert,
    Image,
    ActivityIndicator,
    RefreshControl
} from 'react-native';
import { Form, Button, Item, Input, Header, Container, Content, Icon, Footer, Fab } from 'native-base';
import Modal from "react-native-modal";
import { connect } from 'react-redux'
import * as gamesActions from '../../../store/games/actions'
import * as userActions from '../../../store/user/actions'

import { getUser } from "../../../service/AuthService";
import HttpService from "../../../service/HttpService";

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
                marcados: true,
                pendentes: false
            },
            user: {},
            status: false,
            gameId: '',
            statusPending: false
        }
    }
    componentDidMount() {
        getUser().then(user => this.setState({ user: user }))
        this.props.onLoadPendingGame();
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
    setWin = (gameId) => {
        Alert.alert('Vitória', 'Você realmente ganhou a partida?', [
            {
                text: 'Sim', onPress: () => {
                    HttpService
                        .patch(
                            'game/{id}/win',
                            { id: gameId }
                        ).then(

                            this.props.onUpdate(),
                            Alert.alert(
                                "Vitória",
                                "Parabéns pela vitória"
                            ),
                            this.props.updateGame(),

                        )
                }
            },
            { text: 'Cancelar', style: 'cancel' },
        ])

    }
    setLose = (gameId) => {
        Alert.alert('Derrota', 'Você realmente perdeu a partida?', [
            {
                text: 'Sim', onPress: () => {
                    HttpService
                        .patch(
                            'game/{id}/lose',
                            { id: gameId }
                        ).then(

                            () => this.props.onUpdate(),
                            Alert.alert(
                                "Derrota",
                                "Tente no proximo"
                            ),
                            () => this.props.updateGame(),

                        )
                }
            },
            { text: 'Cancelar', style: 'cancel' },
        ])
    }
    publish = (gameId) => {
        Alert.alert('Jogo', 'Você deseja aceitar esse jogo?!', [
            {
                text: 'Sim', onPress: () => {
                    HttpService
                        .patch(
                            'game/{id}/publish',
                            { id: gameId }
                        ).then(

                            this.props.onUpdate(),
                            Alert.alert(
                                "Jogo",
                                "Tenha um bom jogo"
                            ),
                            this.props.updateGame(),

                        )
                }
            },
            { text: 'Cancelar', style: 'cancel' },
        ])
    }
    reject = (gameId) => {
        Alert.alert('Jogo', 'Você deseja recusar esse jogo?!', [
            {
                text: 'Sim', onPress: () => {
                    HttpService
                        .patch(
                            'game/{id}/game/{id}/reject',
                            { id: gameId }
                        ).then(

                            this.props.onUpdate(),
                            Alert.alert(
                                "Jogo",
                                "Jogo recusado com sucesso"
                            ),
                            this.props.updateGame(),

                        )
                }
            },
            { text: 'Cancelar', style: 'cancel' },
        ])
    }
    sendMessage(id) {
		HttpService.insert('messages', {
			foreign: id
		}).then((message) => this.props.navigation.push('Chat', {
			id: message.id,
			title: message.name,
            avatar: message.avatar
		})).catch(error => Alert.alert('Contato', error.response.data.error))
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
        const { games, pendingGames, loading } = this.props;
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
                        {/* <Button
                            style={styles.buttonFilter}
                            onPress={this.toggleModal}
                        >
                            <IconSVG name='Filter' width='25' height='25' fill='#F75400' />
                        </Button> */}
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
                <ScrollView refreshControl={<RefreshControl refreshing={loading}
                    onRefresh={() => this.props.onUpdate()} />} >
                    <View style={styles.content}>
                        {games.length == 0 && this.state.jogos.marcados ?
                            <AeroText style={{ marginTop: 10, color: 'black', fontSize: 16 }}>Você ainda não possui jogos marcados</AeroText>
                            : this.state.jogos.pendentes && pendingGames.length == 0 ?
                                <AeroText style={{ marginTop: 10, color: 'black', fontSize: 16 }}>Você ainda não possui jogos pendentes</AeroText> :
                                this.state.jogos.marcados ?
                                    games.map(game => {
                                        const { id } = this.state.user;

                                        const me = id == game.owner_id ? game.owner_name : game.foreign_name;
                                        const adv = id == game.owner_id ? game.foreign_name : game.owner_name;
                                        const avatarAdv = id == game.owner_id ? game.image_foreign : game.image_owner;
                                        const foreignId = id == game.foreign_id ? game.owner_id : game.foreign_id

                                        return (
                                            <TouchableOpacity key={game.id} style={{ height: "55%" }} onPress={() => this.setState({status: this.state.gameId != game.id ? true : !this.state.status, gameId: game.id})}>

                                                <View style={styles.buttonList}>
                                                    {this.props.avatarUri && <Image source={{uri: this.props.avatarUri}} style={{ borderRadius: 100, backgroundColor: 'red', height: 50, width: 50, marginLeft: -20 }} />}
                                                    <AeroText style={{ padding: 10 }}>{me}</AeroText>
                                                    {
                                                        this.state.status && this.state.gameId == game.id? 
                                                        <View style={{ flexDirection: 'row', alignItems: "flex-start", justifyContent: 'space-between' }}>
                                                            <TouchableOpacity style={{ position: "absolute", justifyContent: "center", alignItems: 'center', marginLeft: -40, marginTop: 40 }}
                                                                onPress={() => this.setWin(game.id)}
                                                            >
                                                                <View style={{ width: 45, height: 45, borderRadius: 50, backgroundColor: 'green', justifyContent: "center", alignItems: "center" }}>
                                                                    <IconSVG name='Done' height='26' width='26' fill='white' />
                                                                </View>
                                                                <AeroText style={{ marginTop: 5, color: 'green', fontSize: 10 }}>VITÓRIA</AeroText>
                                                            </TouchableOpacity>

                                                            <AeroText style={{ padding: 10, fontSize: 20, color: '#F75400' }}>VS</AeroText>
                                                            <TouchableOpacity style={{ position: "absolute", justifyContent: "center", alignItems: 'center', marginLeft: 40, marginTop: 40 }}
                                                                onPress={() => this.setLose(game.id)}
                                                            >
                                                                <View style={{ width: 45, height: 45, borderRadius: 50, backgroundColor: 'red', justifyContent: "center", alignItems: "center" }}>
                                                                    <IconSVG name='Close' height='23' width='23' fill='white' />
                                                                </View>
                                                                <AeroText style={{ marginTop: 5, color: 'red', fontSize: 10 }}>DERROTA</AeroText>
                                                            </TouchableOpacity>
                                                        </View>
                                                        : <AeroText style={{ padding: 10, fontSize: 20, color: '#F75400' }}>VS</AeroText>
                                                    }
                                                    <AeroText style={{ padding: 10 }}>{adv}</AeroText>
                                                    {avatarAdv ? <Image source={{uri: avatarAdv}} style={{ borderRadius: 100, backgroundColor: 'gray', height: 50, width: 50, marginRight: -20 }} /> :
                                                    <View style={{ borderRadius: 100, backgroundColor: 'gray', height: 50, width: 50, marginRight: -20 }} />
                                                        }
                                                    <View style={{ alignItems: "flex-end", marginRight: -25 }}>

                                                        <TouchableOpacity style={{ position: "absolute", width: 40, height: 40, borderRadius: 50, backgroundColor: 'orange', justifyContent: "center", alignItems: "center" }}
                                                            onPress={() => this.sendMessage(foreignId)}
                                                        >
                                                            <ChatIcon />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>

                                        )
                                    }) :
                                    pendingGames.map(game => {
                                        const { id } = this.state.user;
                                        const me = id == game.owner_id ? game.owner_name : game.foreign_name;
                                        const adv = id == game.owner_id ? game.foreign_name : game.owner_name;
                                        const avatarAdv = id == game.owner_id ? game.image_foreign : game.image_owner;
                                        const foreignId = id == game.foreign_id ? game.owner_id : game.foreign_id

                                        return (
                                            <TouchableOpacity key={game.id} style={{ height: 150 }} onPress={() => {
                                                id != game.owner_id ?
                                                    this.setState({ statusPending: this.state.gameId != game.id ? true : !this.state.statusPending, gameId: game.id })
                                                    :
                                                    Alert.alert('Jogo', 'Aguarde a resposta do adversario!')
                                            }}>

                                                <View style={styles.buttonList}>
                                                {this.props.avatarUri && <Image source={{uri: this.props.avatarUri}} style={{ borderRadius: 100, backgroundColor: 'red', height: 50, width: 50, marginLeft: -20 }} />}
                                                    <AeroText style={{ padding: 10 }}>{me}</AeroText>
                                                    {
                                                        this.state.statusPending && this.state.gameId == game.id ?
                                                            <View style={{ flexDirection: 'row', alignItems: "flex-start", justifyContent: 'space-between' }}>
                                                                <TouchableOpacity style={{ position: "absolute", justifyContent: "center", alignItems: 'center', marginLeft: -40, marginTop: 40 }}
                                                                    onPress={() => this.publish(game.id)}
                                                                >
                                                                    <View style={{ width: 45, height: 45, borderRadius: 50, backgroundColor: 'green', justifyContent: "center", alignItems: "center" }}>
                                                                        <IconSVG name='Done' height='26' width='26' fill='white' />
                                                                    </View>
                                                                    <AeroText style={{ marginTop: 5, color: 'green', fontSize: 10 }}>ACEITAR</AeroText>
                                                                </TouchableOpacity>

                                                                <AeroText style={{ padding: 10, fontSize: 20, color: '#F75400' }}>VS</AeroText>
                                                                <TouchableOpacity style={{ position: "absolute", justifyContent: "center", alignItems: 'center', marginLeft: 40, marginTop: 40 }}
                                                                    onPress={() => this.reject(game.id)}
                                                                >
                                                                    <View style={{ width: 45, height: 45, borderRadius: 50, backgroundColor: 'red', justifyContent: "center", alignItems: "center" }}>
                                                                        <IconSVG name='Close' height='23' width='23' fill='white' />
                                                                    </View>
                                                                    <AeroText style={{ marginTop: 5, color: 'red', fontSize: 10 }}>RECUSAR</AeroText>
                                                                </TouchableOpacity>
                                                            </View>
                                                            : <AeroText style={{ padding: 10, fontSize: 20, color: '#F75400' }}>VS</AeroText>
                                                    }
                                                    <AeroText style={{ padding: 10 }}>{adv}</AeroText>
                                                    {avatarAdv ? <Image source={{uri: avatarAdv}} style={{ borderRadius: 100, backgroundColor: 'gray', height: 50, width: 50, marginRight: -20 }} /> :
                                                    <View style={{ borderRadius: 100, backgroundColor: 'gray', height: 50, width: 50, marginRight: -20 }} />
                                                        }
                                                    <View style={{ alignItems: "flex-end", marginRight: -25 }}>

                                                    <TouchableOpacity style={{ position: "absolute", width: 40, height: 40, borderRadius: 50, backgroundColor: 'orange', justifyContent: "center", alignItems: "center" }}
                                                        onPress={() => this.sendMessage(foreignId)}
                                                    >
                                                        <ChatIcon />
                                                    </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>

                                        )
                                    })

                        }

                    </View>
                </ScrollView>
                <View style={{ flex: 1 }}>

                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{}}
                        style={{ height: "90%", width: "90%", borderRadius: 50, backgroundColor: '#F75400' }}
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
                    minimumDate={moment(new Date()).format()}

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
const mapStateToProps = state => ({
    loading: state.games.loading,
    games: state.games.games,
    pendingGames: state.games.pendingGames,
    avatarUri: state.user.me.avatarUri
});

const mapDispatchToProps = dispatch => ({
    onLoadGame: () => dispatch(gamesActions.loadGame()),
    onLoadPendingGame: () => dispatch(gamesActions.loadPendingGame()),
    updateGame: () => dispatch(userActions.updateGame()),
    clear: () => dispatch(gamesActions.clear()),
    onUpdate: () => dispatch(gamesActions.load())
});

export default connect(mapStateToProps, mapDispatchToProps)(Jogos)

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
        paddingTop: 0
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
