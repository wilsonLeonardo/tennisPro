import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Alert,
  ActivityIndicator
} from 'react-native';
import { Icon, Content, Form, Item, Input, Button, Footer, Container } from 'native-base';
import HttpService from '../service/HttpService'
import LocationService from "../service/LocationService";
import update from "immutability-helper";
import * as permissionService from "../service/PermissionService";
import * as notificationsActions from "../store/notifications/actions";
import * as teacherActions from "../store/teacher/actions";
import * as userActions from "../store/user/actions";
import * as clubActions from "../store/club/actions";
import * as messageActions from "../store/messages/actions";

import { AeroText } from '../components/StyledText';
import { HeaderTennis } from '../components/HomeHeader'
import { PersonFullIcon, KeyIcon } from '../components/Icon/Icon'
import { connect } from 'react-redux';
import { setAuthUser } from "../service/AuthService";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    
		this.state = {
      loading: false,
			showPasswordForgottenModal: false,
			credentials: {
        email: "",
				password: ""
			}
		};
    
  }
  
	handleLogin = () => {
    if (this.state.loading) return;
    
		this.setState({ loading: true });
    
		if (
      this.state.credentials.email == "" ||
			this.state.credentials.password == ""
      ) {
        this.setState({ loading: false });
        return Alert.alert(
          "Entrar",
          "Preencha os campos de E-mail e Senha para prosseguir"
          );
        } else {
          LocationService.getLocation().then(coords => {
            let body = Object.assign(this.state.credentials, coords);
            
            HttpService.login(body)
            .then(this.loginSuccess)
            .catch(err => {
              console.log(err);
              return Alert.alert(
                "Entrar",
                err.response.data.error === "Unauthorized"
								? "E-mail ou senha inválidos."
								: err.response.data.error
                );
              })
              .finally(() => this.setState({ loading: false }));
            });
          }
      };
        
        handleChangeValue = name => value =>
        this.setState(
          update(this.state, {
            credentials: {
              [name]: { $set: value }
            }
          })
          );
          
          loginSuccess = data => {
            this.setState({ loading: true });
            return setAuthUser(data).then(() => {
              this.state.credentials.email = "" 
			        this.state.credentials.password = ""

                if(data.user.profile == "USER"){
                  this.props.dispatch(userActions.loadData());
                  this.props.dispatch(messageActions.fetchMessages());
                  this.props.navigation.navigate("SignedInUser");
                }
                else if(data.user.profile == "TEACHER"){
                  this.props.dispatch(teacherActions.loadMeTeacher());
                  this.props.navigation.navigate("SignedInTeacher");
                }
                else if(data.user.profile == "CLUB"){
                  this.props.dispatch(clubActions.loadCamps());
                  this.props.navigation.navigate("SignedInClub");
                }

                this.props.dispatch(
                  notificationsActions.fetchNotifications(data.user.id)
                );

                permissionService.syncDeviceIdentifier(data.user.id);
              });

            };
            
            render(){
              const { navigate } = this.props.navigation;
              const { loading, credentials } = this.state;
              return (
                <Container style={styles.container}>
                  <ImageBackground source={require('../assets/images/background.jpg')} style={{ resizeMode: 'contain', flex: 3, width: null, height: null }}>
                    <HeaderTennis />
                    <View style={styles.content}>
                      <Form>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                          <Input placeholder='Login' style={styles.Input} 
                            value={credentials.email}
                            onChangeText={this.handleChangeValue("email").bind(
                              this
                            )}
                            autoCapitalize='none'
                            keyboardType='email-address'
                          />
                          <PersonFullIcon style={{ width: 22, height: 26, left: -10 }} />
                        </Item>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                          <Input secureTextEntry={true} placeholder='Senha' style={styles.Input} 
                            value={credentials.password}
                            onChangeText={this.handleChangeValue(
                              "password"
                            ).bind(this)}
                          />
                          <KeyIcon style={{ width: 22, height: 12, left: -10 }} />
                        </Item>
                          <Button block style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#F75400' }} 
                            onPress={this.handleLogin.bind(this)}>
                              {loading ? <ActivityIndicator color="#FFFFFF" /> : 
                                <AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }} >
                                Login
                                </AeroText>
                              }
                          </Button>
                        <View style={{ alignItems: 'center', marginTop: 15 }}>
                          <TouchableOpacity onPress={() => navigate('Type')}>
                            <AeroText style={{ color: '#fff' }}>Não possui uma conta?</AeroText>
                          </TouchableOpacity>
                        </View>
                      </Form>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                      <AeroText style={{ color: '#fff' }}>O nosso objetivo é que até 2022</AeroText>
                      <AeroText style={{ color: '#fff' }}>nós sejamos usados por 80%</AeroText>
                      <AeroText style={{ color: '#fff' }}>dos jogadores de tênis do Brasil</AeroText>
                    </View>
            
                  </ImageBackground>
              </Container>
          
            );
  }
  
}

HomeScreen.navigationOptions = {
  headerShown: false
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 40,
    marginBottom: 25
  },
  item: {
    elevation: 2,
    borderRadius: 10
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    flex: 2,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
  },
  welcomeImage: {
    width: 70,
    height: 60,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  Input: {
    fontSize: 15,
    fontFamily: 'Aero'
  }
});
export default connect(() => ({}))(HomeScreen);
