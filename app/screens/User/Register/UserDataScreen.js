import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addDados } from '../../../store/userRegister/actions'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { Form, Button, Item, Input, Header, Container, Content, Icon } from 'native-base';

import { AeroText } from '../../../components/StyledText';
import { TabsTennis } from '../../../components/Tabs';
import { TitleTennis } from '../../../components/Title'
import IconSVG from '../../../components/Icon/IconSVG';

//export default function UserDataScreen(props) {
class UserDataScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cep: '',
      clube: '',
      nome:'',
      nascimento:'',
      email: '',
      senha: ''
    }
  }
  addDados = () => {
    const { navigate } = this.props.navigation;
    const { state: dados } = this
    this.props.onAddDados(dados)
    navigate('Plans')
  }
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props);

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Header style={{ elevation: 0, backgroundColor: '#ffff' }} />
        <TabsTennis navegar={navigate} />
        <TitleTennis placeholder='Preencha seus dados' Icon="Check" />
        <Content style={styles.content}>
          <Form>
            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
              <Input
                placeholder='Cep'
                style={styles.Input}
                onChangeText={(cep) => this.setState({ cep })}
                value={this.state.cep}
              />
              <View style={{ paddingHorizontal: 5 }}>
                <IconSVG name='Location' width='25' height='25' fill='#F75400' />
              </View>
            </Item>
            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
              <Input
                placeholder='Clube'
                style={styles.Input}
                onChangeText={(clube) => this.setState({ clube })}
                value={this.state.clube}
              />
              <View style={{ paddingHorizontal: 5 }}>
                <IconSVG name='Clothes' width='25' height='25' fill='#F75400' />
              </View>
            </Item>
            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
              <Input
                placeholder='Nome'
                style={styles.Input}
                onChangeText={(nome) => this.setState({ nome })}
                value={this.state.nome}
              />
              <View style={{ paddingHorizontal: 5 }}>
                <IconSVG name='AccountForm' width='25' height='25' fill='#F75400' />
              </View>
            </Item>
            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
              <Input
                placeholder='Nascimento'
                style={styles.Input}
                onChangeText={(nascimento) => this.setState({ nascimento })}
                value={this.state.nascimento}
              />
              <View style={{ paddingHorizontal: 5 }}>
                <IconSVG name='Date' width='25' height='25' fill='#F75400' />
              </View>
            </Item>
            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
              <Input
                placeholder='Email'
                style={styles.Input}
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
              />
              <View style={{ paddingHorizontal: 5 }}>
                <IconSVG name='Mail' width='25' height='25' fill='#F75400' />
              </View>
            </Item>
            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
              <Input
                secureTextEntry={true}
                placeholder='Senha'
                style={styles.Input}
                onChangeText={(senha) => this.setState({ senha })}
                value={this.state.senha}
              />
              <View style={{ paddingHorizontal: 5 }}>
                <IconSVG name='Key' width='25' height='25' fill='#F75400' />
              </View>
            </Item>
            <Button onPress={() => this.addDados()}
              block style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#F75400', marginTop: 20, elevation: 5 }}><AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}> Próximo </AeroText></Button>
          </Form>
        </Content>
      </KeyboardAvoidingView>
    );
  }
}

UserDataScreen.navigationOptions = {
  headerShown: false
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddDados: data => dispatch(addDados(data))
  }
}
const mapStateToProps = state => ({
  data: state.userRegister.data
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDataScreen)

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
    padding: 50,
  },
  Input: {
    fontSize: 15,
    fontFamily: 'Aero'
  }
});
