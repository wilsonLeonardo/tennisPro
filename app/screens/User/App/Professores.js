import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Modal,
  TouchableHighlight,
  Picker
} from 'react-native';
import { Form, Button, Item, Input, Header, Container, Content, Icon, Footer } from 'native-base';

import { AeroText } from '../../../components/StyledText';
import { ChatIcon } from '../../../components/Icon/Icon'
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar, Divider } from 'react-native-elements';

class Professores extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: {
        itemValue: '',
        itemIndex: ''
      },
      modalVisible: false,
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <Container style={styles.container}>
        <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
            <Icon
              name='arrowleft'
              type='AntDesign'
              style={{ paddingRight: 20, color: 'white' }}
            >
              <AeroText style={{ fontSize: 22, color: 'white' }}>  Professores</AeroText>

            </Icon>

            <Button style={styles.buttonFilter}
              onPress={() => {
                this.setModalVisible(true);
              }}>
              <Icon
                name='settings'
                type='Octicons'
                style={{ color: '#F75400' }}
              />
            </Button>
          </View>
        </ImageBackground>
        <ScrollView>
          <View style={styles.content}>

            <Button style={styles.buttonList}>
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
        <View style={{ marginTop: 22 }}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          >
            <View style={{ backgroundColor: 'transparent', flex: 1, flexDirection: 'row', alignItems: "flex-end" }}>
              <View style={{
                backgroundColor: 'white', width: '100%', height: '55%', borderTopLeftRadius: 20, borderTopRightRadius: 20,
              }}>
                <ImageBackground source={require('../../../assets/images/Filtro.png')} style={styles.FitroBottom}>
                  <TouchableHighlight
                    style={{ paddingVertical: 20 }}
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Icon
                      name='settings'
                      type='Octicons'
                      style={{ color: 'white', paddingHorizontal: 10 }}
                    >
                      <AeroText style={{ fontSize: 25 }}>  Filtro</AeroText>
                    </Icon>
                  </TouchableHighlight>
                </ImageBackground>
                <View style={{ flex: 1, padding: 10, justifyContent: 'space-around' }}>
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
          </Modal>
        </View>
      </Container>
    )
  }
}

export default Professores
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
    justifyContent: "center"

  },
  txtFiltro: {
    color: '#F75400'
  }
});
