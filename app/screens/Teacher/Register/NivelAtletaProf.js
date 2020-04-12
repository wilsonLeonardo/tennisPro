import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNivel } from '../../../store/teacherRegister/actions'
import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    TouchableOpacity,
    Alert
    
} from 'react-native';
import { Button } from 'native-base';

import { AeroText } from '../../../components/StyledText';
import { HeaderTennis } from '../../../components/Header'
import { TitleTennis } from '../../../components/Title'

class NivelAtletaProf extends Component {

    constructor(props) {
        super(props)
        this.state = {
            niveis: {
                especialPro: false,
                especial: false,
                interA: false
            }
        }
    }
    onAddNivel = () => {
        const {niveis} = this.state;
        if(!niveis.especialPro && !niveis.especial && !niveis.interA)
            return Alert.alert('Nível', 'Selecione um nivel antes de prosseguir')

        this.props.onAddNivel(this.state.niveis.especial ? 'Especial' : this.state.niveis.especialPro ? 'Especial Pro' : 'Inter A' )
        this.props.navigation.navigate('teacherData')
    }
    
    render() {
        console.log(this.props.nivel)
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled style={styles.container}>
                <HeaderTennis />
                <TitleTennis placeholder={`Qual nível de atleta você\nensina?`} Icon="Ball" />
                <View style={styles.content}>
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
                    <View style={styles.viewButton}>
                        <Button block style={styles.button} onPress={() => this.onAddNivel()}>
                            <AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}> Proxímo </AeroText>
                        </Button>
                    </View>
                </View>
            </KeyboardAvoidingView>

        );
    }
}

NivelAtletaProf.navigationOptions = {
    headerShown: false
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNivel: teacher => dispatch(addNivel(teacher))
    }
}
const mapStateToProps = (state) => ({
    nivel: state.teacherRegister.nivel
})

export default connect(mapStateToProps, mapDispatchToProps)(NivelAtletaProf)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        paddingTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
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
        paddingTop: 120,
        paddingBottom: 20
    },
    button: {
        width: 300,
        height: 40,
        backgroundColor: '#f75400',
        borderRadius: 10,
    },
    buttomText: {
        color: 'white',
        fontSize: 18,
    }
});
