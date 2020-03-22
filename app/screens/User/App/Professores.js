import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableHighlight,
  Picker,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import { Form, Button, Item, Input, Header, Container, Content, Icon, Footer } from 'native-base';
import Modal from "react-native-modal";
import { connect } from 'react-redux'

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
      isModalVisible2: false
    }
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  toggleModal2 = () => {
    this.setState({ isModalVisible2: !this.state.isModalVisible2 });
  };

  render() {
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Dimensions.get("window").height
    return (
      <Container style={styles.container}>
        <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: "flex-start" }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ paddingTop: 5 }}>
                <IconSVG name='Back' height='25' width='25' fill='white' />
              </TouchableOpacity>
              <AeroText style={{ fontSize: 22, color: 'white' }}>   Professores</AeroText>
            </View>
            <Button
              style={styles.buttonFilter}
              onPress={this.toggleModal}
            >
              <IconSVG name='Filter' width='25' height='25' fill='#F75400' />
            </Button>
          </View>
        </ImageBackground>
        <ScrollView>
          <View style={styles.content}>

            <Button
              style={styles.buttonList}
              onPress={this.toggleModal2}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={styles.bottom} />

                <View style={{ alignSelf: "center" }}>
                  <AeroText style={{ paddingBottom: 5 }}>Nome</AeroText>
                  <AeroText style={{ fontSize: 10, color: 'red' }}>Nivel</AeroText>
                </View>
              </View>
              <View style={{ paddingRight: 20 }}>
                <View style={{ paddingBottom: 10 }}>
                  <View style={styles.priceView}>
                    <AeroText style={styles.price}>R$ 758,60</AeroText>
                  </View>

                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <View style={styles.bottomMsg}>
                    <Icon
                      name='chat-bubble'
                      type='MaterialIcons'
                      style={{ color: 'white' }}
                    />
                  </View>
                </View>
              </View>
            </Button>

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

        <Modal
          isVisible={this.state.isModalVisible2}
          animationInTiming={300}
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          coverScreen={true}
          deviceWidth={deviceWidth}
          deviceHeight={deviceHeight}
          onBackdropPress={() => this.setState({ isModalVisible2: false })}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: '35%', width: '80%', backgroundColor: 'white', justifyContent: 'space-between', borderRadius: 20 }}>
              <View style={{ alignItems: "center", justifyContent: 'space-around', flex: 1 }}>

                <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', width: 110, height: 110, borderRadius: 200, backgroundColor: 'white', borderWidth: 2, borderColor: '#ddd', marginTop: -40 }}>
                  <View style={styles.priceView2}>
                    <AeroText style={styles.price}>R$ 758,60</AeroText>
                  </View>
                </View>
                <AeroText style={{ color: 'orange' }}>
                  Alphaville Esporte Clube
                </AeroText>

                <AeroText style={{ fontSize: 15, color: '#455A64' }}>Maria de Carvalho Souza </AeroText>
                <AeroText style={{ color: 'orange' }}>Especial Pro</AeroText>
              </View>
              <View style={{ alignItems: "center", paddingBottom: 10 }}>



                <Button style={{ alignSelf: "center", backgroundColor: 'orange', justifyContent: 'center', width: 125, borderRadius: 30, marginTop: 20 }} onPress={this.toggleModal2} >
                  <AeroText style={{ color: 'white' }} >Conversar</AeroText>
                </Button>

              </View>
            </View>
          </View>
        </Modal>
      </Container>
    )
  }
}

export default connect()(Professores)

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
    backgroundColor: 'red',
    height: 70,
    width: 70,
    marginRight: 10
  },
  priceView: {
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
    height: 15,
    width: 60
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
    fontSize: 8,
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
  }

});
