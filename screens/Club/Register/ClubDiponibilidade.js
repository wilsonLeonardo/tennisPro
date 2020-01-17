import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import { Form, Button, Item, Input, Header, Content, Icon } from 'native-base';

import { AeroText } from '../../../components/StyledText';

export default function ClubDisponibilidade(props) {
    const { navigate } = props.navigation;
    return (
        <Content style={{ backgroundColor: "#ffff" }}>
            <Header style={{ elevation: 0, backgroundColor: '#ffff' }} />
            <View style={styles.welcomeContainer}>

                <Image
                    source={require('../../../assets/images/buraco.png')}
                    style={{
                        resizeMode: 'contain',
                        marginTop: 3,
                        marginLeft: -10,
                        width: 400,
                        height: 150
                    }}
                />
            </View>
            <View style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <View tyle={styles.welcomeContainer}>
                    <View style={styles.caixa} >
                        <AeroText style={{ fontSize: 30, fontWeight: 'normal', alignItems: 'center', color: '#f75400' }}>
                            Quase tudo pronto....
          </AeroText>
                    </View>
                    <View style={styles.caixa} >
                        <Text style={{ fontSize: 18, fontWeight: 'normal', alignItems: 'center', color: '#f75400' }}>
                            Por último, nos informe as
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: 'normal', alignItems: 'center', color: '#f75400' }}>
                            mensalidades e preços
                        </Text>
                    </View>
                    <Content style={styles.content}>
                        <Form>
                            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                                <Input placeholder='Nº de Quadras' />
                                <Icon name='tennisball' style={{ color: '#F75400' }} />
                            </Item>
                            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                                <Input placeholder='Preço do Aluguel' />
                                <Icon name='dollar' style={{ color: '#F75400' }} />
                            </Item>

                            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                                <Input placeholder='Preço da Mensalidade' />
                                <Icon name='md-dollar' style={{ color: '#F75400' }} />
                            </Item>
                            <Button block style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#F75400', marginTop: 20, elevation: 5 }}><AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}> Finalizar </AeroText></Button>
                        </Form>
                    </Content>
                </View>
            </View>

        </Content>
    );
}

ClubDisponibilidade.navigationOptions = {
    headerShown: false
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    item: {
        elevation: 2,
        borderRadius: 10
    },
    content: {
        padding: 20,
        paddingTop: 15,
        marginBottom: 30
    },
    caixa: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,

    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        flex: 2,
        alignItems: 'center',
        marginTop: -20,
        marginBottom: 25,
    },
});
