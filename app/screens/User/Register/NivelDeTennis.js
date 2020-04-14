import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNivel } from '../../../store/userRegister/actions'
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import { Button, Form, Content } from 'native-base';

import { AeroText } from '../../../components/StyledText';
import { HeaderTennis } from '../../../components/Header'
import { TitleTennis } from '../../../components/Title'

class NivelTenis extends Component {
    constructor(props) {
        super(props)
        this.state = {
            niveis: {
                especialPro: false,
                especial: false,
                interA: false,
                interB: false,
                interC: false,
                principiante: false,
                iniciante: false
            }
        }
    }
    onAddNivel = () => {
        const { navigate } = this.props.navigation;
        const { niveis: nivel } = this.state;
        this.props.onAddNivel({ nivel });
        navigate('userData')
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderTennis />
                <TitleTennis placeholder='Qual seu nível de tênis?' Icon="Ball" />
                <Content style={styles.content}>
                    <Form style={{alignItems:'center'}}>

                        <TouchableOpacity
                            style={this.state.niveis.especialPro ? styles.bottomNiveisPress : styles.bottomNiveis}
                            onPress={this.state.niveis.especialPro ? () => this.setState({ niveis: { especialPro: false } }) : () => this.setState({ niveis: { especialPro: true } })}
                            value={this.state.niveis.especialPro}
                        >
                            <AeroText style={this.state.niveis.especialPro ? styles.nivelTextPress : styles.nivelText}  >Especial Pro</AeroText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.niveis.especial ? styles.bottomNiveisPress : styles.bottomNiveis}
                            onPress={this.state.niveis.especial ? () => this.setState({ niveis: { especial: false } }) : () => this.setState({ niveis: { especial: true } })}
                            value={this.state.niveis.especial}
                        >
                            <AeroText style={this.state.niveis.especial ? styles.nivelTextPress : styles.nivelText} >Especial</AeroText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.niveis.interA ? styles.bottomNiveisPress : styles.bottomNiveis}
                            onPress={this.state.niveis.interA ? () => this.setState({ niveis: { interA: false } }) : () => this.setState({ niveis: { interA: true } })}
                            value={this.state.niveis.interA}
                        >
                            <AeroText style={this.state.niveis.interA ? styles.nivelTextPress : styles.nivelText} >Inter A</AeroText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.niveis.interB ? styles.bottomNiveisPress : styles.bottomNiveis}
                            onPress={this.state.niveis.interB ? () => this.setState({ niveis: { interB: false } }) : () => this.setState({ niveis: { interB: true } })}
                            value={this.state.niveis.interB}
                        >
                            <AeroText style={this.state.niveis.interB ? styles.nivelTextPress : styles.nivelText} >Inter B</AeroText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.niveis.interC ? styles.bottomNiveisPress : styles.bottomNiveis}
                            onPress={this.state.niveis.interC ? () => this.setState({ niveis: { interC: false } }) : () => this.setState({ niveis: { interC: true } })}
                            value={this.state.niveis.interC}
                        >
                            <AeroText style={this.state.niveis.interC ? styles.nivelTextPress : styles.nivelText} >Inter C</AeroText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.niveis.principiante ? styles.bottomNiveisPress : styles.bottomNiveis}
                            onPress={this.state.niveis.principiante ? () => this.setState({ niveis: { principiante: false } }) : () => this.setState({ niveis: { principiante: true } })}
                            value={this.state.niveis.principiante}
                        >
                            <AeroText style={this.state.niveis.principiante ? styles.nivelTextPress : styles.nivelText} >Principiante</AeroText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.niveis.iniciante ? styles.bottomNiveisPress : styles.bottomNiveis}
                            onPress={this.state.niveis.iniciante ? () => this.setState({ niveis: { iniciante: false } }) : () => this.setState({ niveis: { iniciante: true } })}
                            value={this.state.niveis.iniciante}
                        >
                            <AeroText style={this.state.niveis.iniciante ? styles.nivelTextPress : styles.nivelText} >Iniciante</AeroText>
                        </TouchableOpacity>

                        <Form style={styles.viewButton} >
                            <Button block style={styles.bottom} onPress={() => this.onAddNivel()}>
                                <AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}> Proxímo </AeroText>
                            </Button>
                        </Form>
                    </Form>
                </Content>
            </View>

        );
    }
}

NivelTenis.navigationOptions = {
    headerShown: false
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNivel: nivel => dispatch(addNivel(nivel))
    }
}

export default connect(null, mapDispatchToProps)(NivelTenis)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        paddingTop: 0,
        padding: 50,
        paddingBottom: 230
    },
    bottomNiveis: {
        marginTop: 15,
        width: 200,
        height: 35,
        backgroundColor: '#EBF0EE',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomNiveisPress: {
        marginTop: 15,
        width: 200,
        height: 35,
        backgroundColor: '#F75400',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    niveis: {
        marginTop: 15,
        width: 200,
        height: 35,
        backgroundColor: '#EBF0EE',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nivelText: {
        fontSize: 18,
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#696B6A',
    },
    nivelTextPress: {
        fontSize: 18,
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    viewButton: {
        paddingTop: 30,
        paddingBottom: 20
    },
    bottom: {
        width: 300,
        height: 40,
        backgroundColor: '#f75400',
        borderRadius: 10,
    },
    bottomText: {
        color: 'white',
        fontSize: 18,
    }
});
