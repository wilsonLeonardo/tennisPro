import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNivel } from './store/actions/teacher'
import {
    StyleSheet,
    View,
    KeyboardAvoidingView
} from 'react-native';
import { Button } from 'native-base';

import { AeroText } from '../components/StyledText';
import { HeaderTennis } from '../components/Header'
import { TitleTennis } from '../components/Title'

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
        this.props.addNivel({ ...this.state })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled style={styles.container}>
                <HeaderTennis />
                <TitleTennis placeholder='Qual nível de atleta você ensina?' Icon="Ball" />
                <View style={styles.content}>
                    <Button style={styles.niveis} onPress={(especialPro) => this.setState({ especialPro: true })} value={this.state.niveis.especialPro}>
                        <AeroText style={styles.nivelText}  >Especial Pro</AeroText>
                    </Button>
                    <Button style={styles.niveis} onPress={(especial) => this.setState({ especial: true })} value={this.state.niveis.especial}>
                        <AeroText style={styles.nivelText} >Especial</AeroText>
                    </Button>
                    <Button style={styles.niveis} onPress={(interA) => this.setState({ interA: true })} value={this.state.niveis.interA}>
                        <AeroText style={styles.nivelText} >Inter A</AeroText>
                    </Button>
                    <View style={styles.viewButton}>
                        <Button block style={styles.button} onPress={() => navigate('teacherData')}>
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

export default connect(null, mapDispatchToProps)(NivelAtletaProf)


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
