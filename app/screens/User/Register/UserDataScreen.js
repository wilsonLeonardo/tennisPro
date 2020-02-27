import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addDados } from '../../store/actions/user'
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

//export default function UserDataScreen(props) {
class UserDataScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cep: '',
      clube: '',
      email: '',
      senha: ''
    }
  }
  addDados = () => {
    this.props.onAddDados({ ...this.state })
  }
  render() {
    const { navigate } = this.props.navigation;
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
              <Icon name='locate' style={{ color: '#F75400' }} />
            </Item>
            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
              <Input
                placeholder='Clube'
                style={styles.Input}
                onChangeText={(clube) => this.setState({ clube })}
                value={this.state.clube}
              />
              <Icon name='shirt' style={{ color: '#F75400' }} />
            </Item>
            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
              <Input
                placeholder='Email'
                style={styles.Input}
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
              />
              <Icon name='mail' style={{ color: '#F75400' }} />
            </Item>
            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
              <Input
                secureTextEntry={true}
                placeholder='Senha'
                style={styles.Input}
                onChangeText={(senha) => this.setState({ senha })}
                value={this.state.senha}
              />
              <Icon name='key' style={{ color: '#F75400' }} />
            </Item>
            <Button onPress={() => navigate('Plans')}
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
    onAddDados: teacher => dispatch(addDados(teacher))
  }
}

export default connect(null, mapDispatchToProps)(UserDataScreen)

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
