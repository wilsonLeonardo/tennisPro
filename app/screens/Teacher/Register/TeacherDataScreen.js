import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addDados } from '../../../store/teacherRegister/actions'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import { Form, Button, Item, Input, Header, Picker, Content } from 'native-base';
import update from "immutability-helper";
import HttpService from '../../../service/HttpService'
import * as teacherActions from '../../../store/teacher/actions'
import { setAuthUser } from "../../../service/AuthService";
import * as permissionService from "../../../service/PermissionService";
import * as notificationsActions from "../../../store/notifications/actions";

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
      credentials: {
        cep: 0,
        clube: '',
        name:'',
        nascimento: 'Nascimento',
        email: '',
        password: '',
        preço:0,
        telefone:'',
        profile:'TEACHER'
			},
      isVisible: false,
    }
  }
  addDados = () => {
      const {nivel} = this.props;
      const dado = Object.assign(this.state.credentials, nivel)
      
      HttpService
        .insert('register', dado)
        .then((data) => {
            Alert.alert('Novo Cadastro', 'Seu cadastro foi realizado com sucesso.');

            this.props.dispatch(teacherActions.loadMeTeacher());
            this.props.dispatch(
              notificationsActions.fetchNotifications(data.user.id)
            );

            permissionService.syncDeviceIdentifier(data.user.id);

            setAuthUser(data).then(() => this.props.navigation.navigate('SignedInTeacher'));
        });
  }
  componentDidMount(){
    HttpService
      .find('clubs')
      .then(clubs => this.setState({clubs}))
  }

  handlePicker = (date) => {
    this.setState(
      update(this.state, {
        credentials: {
          nascimento: { $set: moment(date).format('L')  }
        },
        isVisible: {$set: false}
      })
      );
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
  handleChangeValue = name => value =>
  this.setState(
    update(this.state, {
      credentials: {
        [name]: { $set: value }
      }
    })
    );
  
  render() {
    const { navigate } = this.props.navigation;

    const {clubs} = this.state;

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
                onChangeText={this.handleChangeValue(
                  "cep"
                ).bind(this)}
                value={this.state.cep}
              />
              <View style={{ paddingHorizontal: 5 }}>
                <IconSVG name='Location' width='25' height='25' fill='#F75400' />
              </View>
            </Item>
            <Item picker style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flexDirection:'row' }]}>
            <Picker
                note
                style={[styles.Input, {backgroundColor:'red', flex:1, alignItems:'flex-start'}]}
                selectedValue={this.state.credentials.clube}
                style={{color:'black'}}
                onValueChange={this.handleChangeValue(
                  "clube"
                ).bind(this)}
                mode="dropdown"
                placeholder={'Selecione um clube'}
            >
              {clubs && clubs.map(item =>{
                 return (
                    <Picker.Item label={item.name} value={item.id} key={item.id} />
                 )
              })}
            </Picker>
              <View style={{ paddingHorizontal: 8, flex:1, alignItems:'flex-end' }}>
                <IconSVG name='Clothes' width='25' height='25' fill='#F75400' />
              </View>
            </Item>
            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
              <Input
                placeholder='Nome'
                style={styles.Input}
                onChangeText={this.handleChangeValue(
                  "name"
                ).bind(this)}
                value={this.state.nome}
              />
              <View style={{ paddingHorizontal: 5 }}>
                <IconSVG name='AccountForm' width='25' height='25' fill='#F75400' />
              </View>
            </Item>
            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
              <Input
                placeholder='Telefone'
                style={styles.Input}
                onChangeText={this.handleChangeValue(
                  "telefone"
                ).bind(this)}
                value={this.state.nome}
              />
              <View style={{ paddingHorizontal: 5 }}>
                <IconSVG name='Phone' width='25' height='25' fill='#F75400' />
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
                <AeroText style={{ paddingLeft: 5,paddingVertical: 5, color:'#555',  fontFamily: 'Aero' }} >{this.state.credentials.nascimento}</AeroText>

               
                <View style={{ paddingHorizontal: 5 }}>
                  <IconSVG name='Date' width='25' height='25' fill='#F75400' />
                </View>
              </View>
            </TouchableOpacity>
            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
              <Input
                placeholder='Preço'
                style={styles.Input}
                onChangeText={this.handleChangeValue(
                  "preço"
                ).bind(this)}
                value={this.state.clube}
              />
              <View style={{ paddingHorizontal: 0 }}>
                <IconSVG name='Money' width='25' height='25' fill='#F75400' />
              </View>
            </Item>
            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
              <Input
                placeholder='Email'
                style={styles.Input}
                onChangeText={this.handleChangeValue(
                  "email"
                ).bind(this)}
                value={this.state.email}
                keyboardType='email-address'
                autoCapitalize='none'
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
                onChangeText={this.handleChangeValue(
                  "password"
                ).bind(this)}
                value={this.state.senha}
              />
              <View style={{ paddingHorizontal: 5 }}>
                <IconSVG name='Key' width='25' height='25' fill='#F75400' />
              </View>
            </Item>
            <Button onPress={() => this.addDados()}
              block style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#F75400', marginTop: 20, elevation: 5 }} >
              <AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}> Finalizar </AeroText>
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

const mapStateToProps = (state) => ({
  nivel: state.teacherRegister
})

export default connect(mapStateToProps, null)(TeacherDataScreen)

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
    padding: 40,
    height:"150%"
  },
  Input: {
    fontSize: 15,
    fontFamily: 'Aero'
  }
});
