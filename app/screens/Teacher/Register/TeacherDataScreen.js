import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addDados } from '../../../store/teacherRegister/actions'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { Form, Button, Item, Input, Header, Container, Content, Icon } from 'native-base';

import { AeroText } from '../../../components/StyledText';
import { TabsProf } from '../../../components/TabsProf';
import { TitleTennis } from '../../../components/Title'
import IconSVG from '../../../components/Icon/IconSVG';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

class TeacherDataScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cep: '',
      clube: '',
      nome:'',
      nascimento: 'Nascimento',
      email: '',
      senha: '',
      isVisible: false,
    }
  }
  addDados = () => {
    this.props.onAddDados({ ...this.state })
  }

  handlePicker = (date) => {
    this.setState({
      isVisible: false,
      nascimento: moment(date).format('L'),
    })
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
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Header style={{ elevation: 0, backgroundColor: '#ffff' }} />
        <TabsProf navegar={navigate} />
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
            <TouchableOpacity style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', height:40, justifyContent:'center' }]} onPress={this.showPicker}>
              {/* <Input
                placeholder='Nascimento'
                style={styles.Input}
                onChangeText={(nascimento) => this.setState({ nascimento })}
                value={this.state.nascimento}
              /> */}
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <AeroText style={{ paddingLeft: 5,paddingVertical: 5, color:'#555' }} >{this.state.nascimento}</AeroText>

               
                <View style={{ paddingHorizontal: 5 }}>
                  <IconSVG name='Date' width='25' height='25' fill='#F75400' />
                </View>
              </View>
            </TouchableOpacity>
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
            <Button onPress={() => navigate('teacherDispo')}
              block style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#F75400', marginTop: 20, elevation: 5 }} >
              <AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}> Próximo </AeroText>
            </Button>
          </Form>
          <DateTimePickerModal
            mode="date"
            isVisible={this.state.isVisible}
            onConfirm={this.handlePicker}
            onCancel={this.hidePicker}
          />
        </Content>
      </KeyboardAvoidingView>
    );
  }
}

TeacherDataScreen.navigationOptions = {
  headerShown: false
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddDados: teacher => dispatch(addDados(teacher))
  }
}

export default connect(null, mapDispatchToProps)(TeacherDataScreen)

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
