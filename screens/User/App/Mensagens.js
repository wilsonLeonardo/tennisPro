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

class Mensagens extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
          <View style={{ alignSelf: 'flex-start', flexDirection: 'row', paddingBottom: 20 }}>
            <Icon
              name='arrowleft'
              type='AntDesign'
              style={{paddingRight: 20, color: 'white' }}
            />
            <AeroText style={{fontSize: 20, color: 'white'}}>Chat</AeroText>
          </View>
          <Item style={styles.item}>
            <SearchIcon style={styles.iconSeach} />
            <Input style={styles.Input}>Pesquise por nomes</Input>
          </Item>

        </ImageBackground>
        <View style={styles.content}>
          <ScrollView>
            <Button style={styles.buttonList}>
              <View style={{ borderRadius: 100, backgroundColor: 'red', height: 50, width: 50, marginHorizontal: 10 }} />
              <View style={{}}>
                <AeroText style={{ margin: 5 }}>Nome</AeroText>
                <AeroText style={{ fontSize: 10, marginHorizontal: 5 }}>msg</AeroText>
              </View>
            </Button>
            <Button style={styles.buttonList}>
              <View style={{ borderRadius: 100, backgroundColor: 'red', height: 50, width: 50, marginHorizontal: 10 }} />
              <View style={{}}>
                <AeroText style={{ margin: 5 }}>Nome</AeroText>
                <AeroText style={{ fontSize: 10, marginHorizontal: 5 }}>msg</AeroText>
              </View>
            </Button>
            <Button style={styles.buttonList}>
              <View style={{ borderRadius: 100, backgroundColor: 'red', height: 50, width: 50, marginHorizontal: 10 }} />
              <View style={{}}>
                <AeroText style={{ margin: 5 }}>Nome</AeroText>
                <AeroText style={{ fontSize: 10, marginHorizontal: 5 }}>msg</AeroText>
              </View>
            </Button>
            <Button style={styles.buttonList}>
              <View style={{ borderRadius: 100, backgroundColor: 'red', height: 50, width: 50, marginHorizontal: 10 }} />
              <View style={{}}>
                <AeroText style={{ margin: 5 }}>Nome</AeroText>
                <AeroText style={{ fontSize: 10, marginHorizontal: 5 }}>msg</AeroText>
              </View>
            </Button>
            <Button style={styles.buttonList}>
              <View style={{ borderRadius: 100, backgroundColor: 'red', height: 50, width: 50, marginHorizontal: 10 }} />
              <View style={{}}>
                <AeroText style={{ margin: 5 }}>Nome</AeroText>
                <AeroText style={{ fontSize: 10, marginHorizontal: 5 }}>msg</AeroText>
              </View>
            </Button>
          </ScrollView>
        </View >
      </Container>
    )
  }
}

export default Mensagens
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    height: 200,
    justifyContent: 'space-between',
    paddingTop: 40,
    padding: 10,
    paddingBottom: 130,
  },
  button: {
    marginLeft: 160,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-start",
    backgroundColor: "#ffff",
    width: 125,
    borderRadius: 100,
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
