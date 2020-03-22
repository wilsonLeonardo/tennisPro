import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPlans } from '../../../store/userRegister/actions'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
    Dimensions
} from 'react-native';
import { Form, Button, Item, Input, Header, Container, Content, Icon, Card, CardItem } from 'native-base';
import Modal from "react-native-modal";

import { AeroText } from '../../../components/StyledText';
import { TabsTennis } from '../../../components/Tabs';
import { TitleTennis } from '../../../components/Title'
import { PlusIcon, StarIcon } from '../../../components/Icon/Icon'
import { TouchableHighlight } from 'react-native-gesture-handler';
import IconSVG from '../../../components/Icon/IconSVG'

class UserPlans extends Component {
    constructor(props) {
        super(props)
        this.state = {
            plans: {
                bronze: false,
                gold: false,
                silver: false
            },
            isModalVisible: false
        }
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    onAddPlans = () => {
        const { navigate } = this.props.navigation;
        this.props.onAddPlans(this.state.plans)

        navigate('userDispo')
    }

    render() {
        const deviceWidth = Dimensions.get("window").width;
        const deviceHeight = Dimensions.get("window").height
        const { navigate } = this.props.navigation;
        console.log(this.props);
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Header style={{ elevation: 0, backgroundColor: '#ffff' }} />
                <TabsTennis navegar={navigate} done="Yes" />
                <TitleTennis placeholder='Escolha algum plano' Icon="Star" />
                <Content style={styles.content}>
                    <Card >
                        <CardItem button onPress={(bronze) => this.setState({ plans: { bronze: true } })} value={this.state.plans.bronze} style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <AeroText style={{ borderBottomColor: 'gray', borderBottomWidth: 3, fontSize: 18 }}>Bronze</AeroText>
                                <AeroText style={{ color: '#a3a3a3', fontSize: 13 }}>Mensal</AeroText>
                            </View>
                            <View style={{ flex: 2, alignItems: 'flex-end', justifyContent: 'center' }}>
                                <AeroText style={{ color: '#a3a3a3', fontSize: 30 }}>12,90<AeroText style={{ color: '#a3a3a3', fontSize: 13 }}> R$</AeroText></AeroText>
                            </View>
                        </CardItem>
                    </Card>
                    <Card style={{ height: 100, justifyContent: 'center' }}>
                        <CardItem button onPress={(gold) => this.setState({ plans: { gold: true } })} value={this.state.plans.gold} style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <AeroText style={{ color: '#F75400', fontSize: 11 }}>Recomendado</AeroText>
                                <View style={{ flexDirection: 'row', borderBottomColor: '#F75400', borderBottomWidth: 3, }}>
                                    <StarIcon style={{ width: 20, height: 18, left: -2 }} />
                                    <AeroText style={{ fontSize: 18, color: '#F75400' }}>
                                        Gold
                                </AeroText>
                                </View>
                                <AeroText style={{ color: '#F75400', fontSize: 13 }}>Anual</AeroText>
                            </View>
                            <View style={{ flex: 3, justifyContent: 'center' }}>
                                <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <AeroText style={{ color: '#F75400', fontSize: 30 }}> <AeroText style={{ color: '#F75400', fontSize: 13 }}>12x </AeroText>8,32
                                <AeroText style={{ color: '#F75400', fontSize: 13 }}> R$</AeroText></AeroText>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <AeroText style={{ color: '#F75400', fontSize: 12 }}> Ou 99,90 R$</AeroText>
                                </View>

                            </View>
                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem button onPress={(silver) => this.setState({ plans: { silver: true } })} value={this.state.plans.silver} >
                            <View style={{ flex: 1 }}>
                                <AeroText style={{ borderBottomColor: 'gray', borderBottomWidth: 3, fontSize: 18 }}>Silver</AeroText>
                                <AeroText style={{ color: '#a3a3a3', fontSize: 13 }}>Semestral</AeroText>
                            </View>
                            <View style={{ flex: 2, justifyContent: 'center' }}>
                                <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <AeroText style={{ color: '#a3a3a3', fontSize: 30 }}>
                                        <AeroText style={{ color: '#a3a3a3', fontSize: 13 }}>6x </AeroText>
                                        9,98<AeroText style={{ color: '#a3a3a3', fontSize: 13 }}> R$</AeroText></AeroText>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <AeroText style={{ color: '#a3a3a3', fontSize: 12 }}> Ou 59,90 R$</AeroText>
                                </View>

                            </View>
                        </CardItem>
                    </Card>
                    <View style={styles.title}>
                        <TouchableHighlight onPress={this.toggleModal} >

                            <View style={styles.caixa} >
                                <PlusIcon />
                                <AeroText style={[{ fontSize: 18, left: 10, alignItems: 'center', color: '#f75400' }, this.props.style]}>
                                    Adicionar cupom
                            </AeroText>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <Button onPress={() => this.onAddPlans()}
                        block style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#F75400', marginTop: 20, elevation: 5 }}><AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}> Próximo </AeroText></Button>
                    <View style={{ flex: 1 }}>
                        <Modal
                            isVisible={this.state.isModalVisible}
                            animationInTiming={300}
                            animationIn="slideInLeft"
                            animationOut="slideOutRight"
                            coverScreen={true}
                            deviceWidth={deviceWidth}
                            deviceHeight={deviceHeight}
                            onBackdropPress={() => this.setState({isModalVisible: false})}
                        >
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: 250, width: '95%', backgroundColor: 'white', padding: 20, justifyContent: 'space-around', borderRadius: 10 }}>
                                    <AeroText style={{ color: '#F75400', fontSize: 18 }}>Insira o seu cupom</AeroText>

                                    <Item style={{ backgroundColor: '#ddd', borderRadius: 10, paddingHorizontal: 10 }} >
                                        <Input placeholder='Cupom' />
                                        <IconSVG name="Ticket" height="20" width="20" fill="#F75400" />
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
                    </View>
                </Content>
            </KeyboardAvoidingView>
        );
    }
}

UserPlans.navigationOptions = {
    headerShown: false
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPlans: user => dispatch(addPlans(user))
    }
}
const mapStateToProps = state => ({
    data: state.userRegister.data
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPlans)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff"
    },
    item: {
        elevation: 2,
        borderRadius: 10
    },
    content: {
        paddingTop: 20,
        padding: 50,
    },
    Input: {
        fontSize: 15,
        fontFamily: 'Aero'
    },
    title: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    caixa: {
        flexDirection: 'row',
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
