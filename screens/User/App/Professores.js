import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { Form, Button, Item, Input, Header, Container, Content, Icon, Footer } from 'native-base';

import { AeroText } from '../../../components/StyledText';
import { SearchIcon } from '../../../components/Icon/Icon'
import { ScrollView } from 'react-native-gesture-handler';

class Professores extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
          <View style={{ flexDirection: 'row' }}>
            <Icon
              name='arrowleft'
              type='AntDesign'
              style={{ paddingRight: 20, color: 'white' }}
            />
            <AeroText style={{fontSize: 20, color: 'white'}}>Professores</AeroText>
          </View>
          <Button style={styles.button} >
            <Icon
              name='settings'
              type='Octicons'
              style={{ color: '#F75400' }}
            />
          </Button>
        </ImageBackground>
        <View style={styles.content}>
          <ScrollView style={{ marginVertical: 10 }}>
            <Button style={styles.buttonList}>
              <View style={{ borderRadius: 100, backgroundColor: 'red', height: 50, width: 50, marginHorizontal: 10 }} />
              <View style={{}}>
                <AeroText style={{ margin: 5 }}>Nome</AeroText>
                <AeroText style={{ fontSize: 10, marginHorizontal: 5 }}>Nivel</AeroText>
              </View>
            </Button>
            <Button style={styles.buttonList}>
              <View style={{ borderRadius: 100, backgroundColor: 'red', height: 50, width: 50, marginHorizontal: 10 }} />
              <View style={{}}>
                <AeroText style={{ margin: 5 }}>Nome</AeroText>
                <AeroText style={{ fontSize: 10, marginHorizontal: 5 }}>Nivel</AeroText>
              </View>
            </Button>
            <Button style={styles.buttonList}>
              <View style={{ borderRadius: 100, backgroundColor: 'red', height: 50, width: 50, marginHorizontal: 10 }} />
              <View style={{}}>
                <AeroText style={{ margin: 5 }}>Nome</AeroText>
                <AeroText style={{ fontSize: 10, marginHorizontal: 5 }}>Nivel</AeroText>
              </View>
            </Button>
            <Button style={styles.buttonList}>
              <View style={{ borderRadius: 100, backgroundColor: 'red', height: 50, width: 50, marginHorizontal: 10 }} />
              <View style={{}}>
                <AeroText style={{ margin: 5 }}>Nome</AeroText>
                <AeroText style={{ fontSize: 10, marginHorizontal: 5 }}>Nivel</AeroText>
              </View>
            </Button>
            <Button style={styles.buttonList}>
              <View style={{ borderRadius: 100, backgroundColor: 'red', height: 50, width: 50, marginHorizontal: 10 }} />
              <View style={{}}>
                <AeroText style={{ margin: 5 }}>Nome</AeroText>
                <AeroText style={{ fontSize: 10, marginHorizontal: 5 }}>Nivel</AeroText>
              </View>
            </Button>
          </ScrollView>
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
    alignItems: "center"
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 200,
    justifyContent: 'space-between',
    paddingTop: 40,
    padding: 10,
    paddingBottom: 115
  },
  button: {
    alignSelf: 'flex-end',
    justifyContent: "center",
    marginRight: 20,
    backgroundColor: "#ffff",
    width: 55,
    borderRadius: 100,
  },
  textButton: {
    color: '#F75400'
  },
  buttonList: {
    marginVertical: 8,
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: 'wrap',
    width: 300,
    height: 70,
    backgroundColor: "#ffff",
    borderWidth: 2,
    borderRightWidth: 4,
    borderRadius: 8,
    borderColor: '#ddd',
    borderBottomWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 9,
  },
  item: {
    marginTop: 20,
    backgroundColor: 'red',
    flexDirection: 'row',
    backgroundColor: "#ffff",
    height: 50,
    width: 300,
    elevation: 2,
    borderRadius: 10
  },
  iconSeach: {
    margin: 10
  },
  Input: {
    fontSize: 17,
    fontFamily: 'Aero',
  },

});
