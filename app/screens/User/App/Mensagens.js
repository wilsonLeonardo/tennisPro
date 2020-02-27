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
import { SearchBar } from 'react-native-elements';

class Mensagens extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    return (
      <Container style={styles.container}>
        <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={{}}>
          <View style={styles.header}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
              <Icon
                name='arrowleft'
                type='AntDesign'
                style={{ color: 'white' }}
              >
                <AeroText style={{ fontSize: 22, color: 'white' }}>   Chat</AeroText>
              </Icon>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <SearchBar
              containerStyle={{ backgroundColor: 'transparent', borderBottomColor: 'transparent', borderTopColor: 'transparent' }}
              inputContainerStyle={styles.item}
              inputStyle={styles.Input}
              placeholder="Pesquise por nomes"
              onChangeText={this.updateSearch}
              value={search}
            />
          </View>

        </ImageBackground>
        <ScrollView>
          <View style={styles.content}>
            <Button style={styles.buttonList}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.bottom} />

                <View style={{ alignSelf: "center" }}>
                  <AeroText style={{ paddingBottom: 5 }}>Nome</AeroText>
                  <AeroText style={{ fontSize: 10, fontStyle: "italic" }}>Msg</AeroText>
                </View>
              </View>
            </Button>
            <Button style={styles.buttonList}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.bottom} />

                <View style={{ alignSelf: "center" }}>
                  <AeroText style={{ paddingBottom: 5 }}>Nome</AeroText>
                  <AeroText style={{ fontSize: 10, fontStyle: "italic" }}>Msg</AeroText>
                </View>
              </View>
            </Button>
            <Button style={styles.buttonList}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.bottom} />

                <View style={{ alignSelf: "center" }}>
                  <AeroText style={{ paddingBottom: 5 }}>Nome</AeroText>
                  <AeroText style={{ fontSize: 10, fontStyle: "italic" }}>Msg</AeroText>
                </View>
              </View>
            </Button>
            <Button style={styles.buttonList}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.bottom} />

                <View style={{ alignSelf: "center" }}>
                  <AeroText style={{ paddingBottom: 5 }}>Nome</AeroText>
                  <AeroText style={{ fontSize: 10, fontStyle: "italic" }}>Msg</AeroText>
                </View>
              </View>
            </Button>
            <Button style={styles.buttonList}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.bottom} />

                <View style={{ alignSelf: "center" }}>
                  <AeroText style={{ paddingBottom: 5 }}>Nome</AeroText>
                  <AeroText style={{ fontSize: 10, fontStyle: "italic" }}>Msg</AeroText>
                </View>
              </View>
            </Button>
            <Button style={styles.buttonList}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.bottom} />

                <View style={{ alignSelf: "center" }}>
                  <AeroText style={{ paddingBottom: 5 }}>Nome</AeroText>
                  <AeroText style={{ fontSize: 10, fontStyle: "italic" }}>Msg</AeroText>
                </View>
              </View>
            </Button>
            <Button style={styles.buttonList}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.bottom} />

                <View style={{ alignSelf: "center" }}>
                  <AeroText style={{ paddingBottom: 5 }}>Nome</AeroText>
                  <AeroText style={{ fontSize: 10, fontStyle: "italic" }}>Msg</AeroText>
                </View>
              </View>
            </Button>
            <Button style={styles.buttonList}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.bottom} />

                <View style={{ alignSelf: "center" }}>
                  <AeroText style={{ paddingBottom: 5 }}>Nome</AeroText>
                  <AeroText style={{ fontSize: 10, fontStyle: "italic" }}>Msg</AeroText>
                </View>
              </View>
            </Button>

          </View >
        </ScrollView>
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
    padding: 20,
    paddingHorizontal: 55
  },
  header: {
    flexDirection: 'row',
    height: 150,
    justifyContent: 'space-between',
    paddingTop: 40,
    padding: 20
  },
  bottom: {
    borderRadius: 60,
    backgroundColor: 'red',
    height: 50,
    width: 50,
    marginHorizontal: 10
  },
  buttonList: {
    flex: 1,
    marginVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
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
    backgroundColor: "#ffff",
    height: 40,
    width: 300,
    elevation: 2,
    borderRadius: 10
  },
  iconSeach: {
    margin: 10
  },
  Input: {
    fontSize: 15,
    fontFamily: 'Aero',
  },

});
