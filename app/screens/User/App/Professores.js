import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableHighlight,
  Picker,
  Dimensions,
  RefreshControl,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform, Image
} from 'react-native';
import { Form, Button, Item, Input, Header, Container, Content, Icon, Footer } from 'native-base';
import Modal from "react-native-modal";
import {connect} from 'react-redux'
import * as userActions from '../../../store/user/actions'
import TeacherDetails from './Modal'

import { AeroText } from '../../../components/StyledText';
import { ChatIcon } from '../../../components/Icon/Icon'
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar, Divider } from 'react-native-elements';
import IconSVG from '../../../components/Icon/IconSVG';

class Professores extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: {
        itemValue: '',
        itemIndex: ''
      },
      isModalVisible: false,
      opened: false,
      currentItem: undefined
    }
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  toggleModal2 = (id) => {
    this.setState({ isModalVisible2: !this.state.isModalVisible2 });
  };  
  setCurrentItem = (user) => {
    this.setState({currentItem: user});
  }
  setOpen = (bool) => {
    this.setState({opened: bool})
  }
  render() {
    const {opened, currentItem} = this.state;
    const {loading, teachers} = this.props;
    //console.log(this.props.teachers);
    return (
      <Container style={styles.container}>
        <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
            <Icon
              name='arrowleft'
              type='AntDesign'
              style={{ paddingRight: 20, color: 'white' }}
              onPress={() => this.props.navigation.goBack()}
            >

            </Icon>
            <AeroText style={{ fontSize: 22, color: 'white', left: Platform.OS === 'ios' ? "-100%" : "-40%" }}>Professores</AeroText>
            {Platform.OS === 'ios' ? null : 
              <Button
                style={styles.buttonFilter}
                onPress={this.toggleModal}
              >
                <IconSVG name='Filter' width='25' height='25' fill='#F75400' />
              </Button>
            }
          </View>
      </ImageBackground>
        
        <ScrollView style={{position:'absolute', top:'15%', height:'90%', paddingLeft:'2%'}} refreshControl={<RefreshControl refreshing={this.props.loading}
         onRefresh={() => this.props.dispatch(userActions.loadMoreTeacher())}/>}>
          <View style={styles.content}>
              {!loading ?
                teachers.map(teacher =>{
                  return(
                      <Button key={teacher.meTeacher}
                              style={styles.buttonList}
                              onPress={() =>{
                                this.setCurrentItem(teacher),
                                this.setOpen(true)
                              }}
                            >
                              <View style={{ flexDirection: "row" }}>
                              <View style={styles.bottom} >
                                  {teacher.image && <Image source={{uri: teacher.image}} resizeMode='cover' style={styles.image} />}
                              </View>
              
                                <View style={{ alignSelf: "center", width:'50%' }}>
                                  <View >
                                    <AeroText style={{ paddingBottom: 5}}>{teacher.name}</AeroText>
                                  </View>
                                  <AeroText style={{ fontSize: 12, color: 'red' }}>{teacher.nivel}</AeroText>
                                </View>
                              </View>
                              <View >
                                <View style={{ paddingBottom: 10 }}>
                                  <View style={styles.priceView}>
                                      <AeroText style={styles.price}>R$ {teacher.preço}</AeroText>
                                  </View>
              
                                </View>
                              </View>
                        </Button>
                  )
                }) : null
            }
          </View>
        </ScrollView>
        <Modal
          isVisible={this.state.isModalVisible}
          customBackdrop={
            <View style={{ flex: 1 }}>
              <TouchableWithoutFeedback onPress={() => this.setState(this.toggleModal)} >
                <View style={{ flex: 1, backgroundColor: 'gray' }}></View>
              </TouchableWithoutFeedback>
              <View style={{ backgroundColor: 'gray', flex: 2, flexDirection: 'row', alignItems: "flex-end" }}>
                <View style={{ backgroundColor: 'white', width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20, }}>
                  <ImageBackground source={require('../../../assets/images/Filtro.png')} style={styles.FitroBottom}>
                    <TouchableWithoutFeedback
                      style={{ paddingVertical: 20 }}
                      onPress={this.toggleModal}
                    >
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ paddingHorizontal: 15 }}>
                          <IconSVG name='Filter' width='30' height='30' fill='white' />
                        </View>

                        <AeroText style={{ fontSize: 25, color: 'white' }}>Filtro</AeroText>
                      </View>
                    </TouchableWithoutFeedback>
                  </ImageBackground>
                  <View style={{ flex: 1, backgroundColor:'white',padding: 10, justifyContent: 'space-around' }}>
                    <View style={{ height: 70 }}>

                      <AeroText style={styles.txtFiltro} >Preço</AeroText>
                      <Picker
                        selectedValue={this.state.language}
                        style={{ flex: 1, height: 50 }}
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState({ language: itemValue })
                        }>
                        <Picker.Item label="Geral" value="geral" />
                        <Picker.Item label="Especial Pro" value="especialPro" />
                        <Picker.Item label="Especial" value="especial" />
                        <Picker.Item label="inter A" value="a" />
                        <Picker.Item label="inter B" value="b" />
                        <Picker.Item label="inter C" value="c" />
                        <Picker.Item label="Principiante" value="principiante" />
                        <Picker.Item label="Iniciante" value="iniciante" />
                      </Picker>
                      <Divider />
                    </View>
                    <View style={{ height: 70 }}>

                      <AeroText style={styles.txtFiltro} >Clube</AeroText>
                      <Picker
                        selectedValue={this.state.language}
                        style={{ flex: 1, height: 50 }}
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState({ language: itemValue })
                        }>
                        <Picker.Item label="Geral" value="geral" />
                        <Picker.Item label="Especial Pro" value="especialPro" />
                        <Picker.Item label="Especial" value="especial" />
                        <Picker.Item label="inter A" value="a" />
                        <Picker.Item label="inter B" value="b" />
                        <Picker.Item label="inter C" value="c" />
                        <Picker.Item label="Principiante" value="principiante" />
                        <Picker.Item label="Iniciante" value="iniciante" />
                      </Picker>
                      <Divider />
                    </View>
                    <View style={{ height: 70 }}>

                      <AeroText style={styles.txtFiltro} >Nível</AeroText>
                      <Picker
                        selectedValue={this.state.language}
                        style={{ flex: 1, height: 50 }}
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState({ language: itemValue })
                        }>
                        <Picker.Item label="Geral" value="geral" />
                        <Picker.Item label="Especial Pro" value="especialPro" />
                        <Picker.Item label="Especial" value="especial" />
                        <Picker.Item label="inter A" value="a" />
                        <Picker.Item label="inter B" value="b" />
                        <Picker.Item label="inter C" value="c" />
                        <Picker.Item label="Principiante" value="principiante" />
                        <Picker.Item label="Iniciante" value="iniciante" />
                      </Picker>
                      <Divider />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          }
        />
        <TeacherDetails visible={opened} user={currentItem} end={() => this.setOpen(false)}/>
      </Container>
    )
  }
}
const mapStateToProps = state => ({
  teachers: state.user.teacher,
  loading: state.user.loading
});


export default connect(mapStateToProps, null)(Professores)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    height: 200,
    justifyContent: 'space-between',
    paddingTop: 40,
    padding: 20
  },
  buttonFilter: {
    justifyContent: "center",
    backgroundColor: "#ffff",
    width: 55,
    borderRadius: 100,
  },
  textButton: {
    color: '#F75400'
  },
  buttonList: {
    flex: 1,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    width:"100%",
    backgroundColor: "#ffff",
    borderWidth: 2,
    borderRightWidth: 4,
    borderRadius: 30,
    borderColor: '#ddd',
    borderBottomWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 9,
  },
  bottom: {
    borderRadius: 60,
    backgroundColor: '#F75400',
    height: 80,
    width: 80,
    marginRight: 10, 
    //elevation:10,
    //position:'relative',
    //opacity:0.89,
    left:"-20%"
  },
  priceView: {
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
    height: 20,
    width: 80
  },
  priceView2: {
    backgroundColor: 'green',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 60
  },
  price: {
    color: 'white',
    fontSize: 12,
  },
  bottomMsg: {
    position: "absolute",
    width: 55, height: 40,
    borderRadius: 50,
    backgroundColor: 'orange',
    justifyContent: "center"
  },
  FitroBottom: {

    width: '100%',
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'orange',
    justifyContent: "center",
  },
  txtFiltro: {
    color: '#F75400'
  },
  CampeonatosModal: {
    width: '100%',
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'orange',
    justifyContent: "center",
  },
  CampeonatosModalTxt: {
    fontSize: 13,
    paddingHorizontal: 10
  },
  CampeonatosModalTxtView: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center'
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: '#ffff',
    shadowColor: '#000000',
    shadowOffset: {
        width: 0,
        height: 5
    },
    shadowRadius: 10,
    shadowOpacity: 0.9,
    borderRadius: 50,
    elevation: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
},

});
