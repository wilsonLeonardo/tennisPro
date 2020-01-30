import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNivel } from './store/actions/user'
import {
    StyleSheet,
    View,
} from 'react-native';
import { Button } from 'native-base';

import { AeroText } from '../components/StyledText';
import { HeaderTennis } from '../components/Header'
import { TitleTennis } from '../components/Title'

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
        this.props.addNivel({ ...this.state })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <HeaderTennis />
                <TitleTennis placeholder='Qual seu nível de tênis?' Icon="Ball" />
                <View style={styles.content}>
                    <Button style={styles.niveis} onPress={(especialPro) => this.setState({ especialPro: true })} value={this.state.niveis.especialPro} >
                        <AeroText style={styles.nivelText} >Especial Pro</AeroText>
                    </Button>
                    <Button style={styles.niveis} onPress={(especial) => this.setState({ especial: true })} value={this.state.niveis.especial}>
                        <AeroText style={styles.nivelText} >Especial</AeroText>
                    </Button>
                    <Button style={styles.niveis} onPress={(interA) => this.setState({ interA: true })} value={this.state.niveis.interA}>
                        <AeroText style={styles.nivelText} >Inter A</AeroText>
                    </Button>
                    <Button style={styles.niveis} onPress={(interB) => this.setState({ interB: true })} value={this.state.niveis.interB}>
                        <AeroText style={styles.nivelText} >Inter B</AeroText>
                    </Button>
                    <Button style={styles.niveis} onPress={(interC) => this.setState({ interC: true })} value={this.state.niveis.interC}>
                        <AeroText style={styles.nivelText} >Inter C</AeroText>
                    </Button>
                    <Button style={styles.niveis} onPress={(principiante) => this.setState({ principiante: true })} value={this.state.niveis.principiante}>
                        <AeroText style={styles.nivelText} >Principiante</AeroText>
                    </Button>
                    <Button style={styles.niveis} onPress={(iniciante) => this.setState({ iniciante: true })} value={this.state.niveis.iniciante} >
                        <AeroText style={styles.nivelText} >Iniciante</AeroText>
                    </Button>
                    <View style={styles.viewButton} >
                        <Button block style={styles.bottom} onPress={() => navigate('userData')}>
                            <AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}> Proxímo </AeroText>
                        </Button>
                    </View>
                </View>
            </View>

        );
    }
}

NivelTenis.navigationOptions = {
    headerShown: false
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNivel: user => dispatch(addNivel(user))
    }
}

export default connect(null, mapDispatchToProps)(NivelTenis)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        paddingTop: 10,
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
